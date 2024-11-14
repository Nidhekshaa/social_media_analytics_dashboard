const express = require("express");
const axios = require("axios");
const { google } = require("googleapis");
const path = require("path");

const app = express();
const port = 5000;
const apiKey = "AIzaSyBLxiBPCtUuey6j6lczIjcGBACdybT-2TA";
const youtube = google.youtube({
  version: "v3",
  auth: apiKey,
});

// Serve the HTML file from the public directory
app.use(express.static(path.join(__dirname, "public")));

// API route to get channel and video details
app.get("/channel-info", async (req, res, next) => {
  try {
    const channelName = req.query.channel_name;

    // Search for channel by name
    const searchResponse = await youtube.search.list({
      part: "snippet",
      q: channelName,
      type: "channel",
    });

    if (!searchResponse.data.items || searchResponse.data.items.length === 0) {
      return res.status(404).json({ error: "Channel not found" });
    }

    const channelId = searchResponse.data.items[0].id.channelId;

    // Fetch channel statistics
    const channelResponse = await youtube.channels.list({
      part: "statistics",
      id: channelId,
    });

    if (!channelResponse.data.items || channelResponse.data.items.length === 0) {
      return res.status(404).json({ error: "Channel statistics not found" });
    }

    const channelStats = channelResponse.data.items[0].statistics;

    // Fetch top 5 videos for the channel
    const videosResponse = await youtube.search.list({
      part: "snippet",
      channelId: channelId,
      maxResults: 5,
      order: "viewCount",
      type: "video",
    });

    const videoStats = [];

    // Fetch details for each video
    for (const video of videosResponse.data.items) {
      const videoId = video.id.videoId;
      const videoDetailsResponse = await youtube.videos.list({
        part: "statistics,snippet",
        id: videoId,
      });

      if (videoDetailsResponse.data.items.length > 0) {
        const videoDetails = videoDetailsResponse.data.items[0];
        const likeCount = videoDetails.statistics.likeCount;
        const commentCount = videoDetails.statistics.commentCount;
        const title = videoDetails.snippet.title;
        const thumbnailUrl = videoDetails.snippet.thumbnails.high.url;
        const uploadTime = videoDetails.snippet.publishedAt;

        videoStats.push({
          title,
          likeCount,
          commentCount,
          uploadTime,
          thumbnailUrl,
        });
      }
    }

    res.json({
      channelStats: {
        subscriberCount: channelStats.subscriberCount,
        viewCount: channelStats.viewCount,
        videoCount: channelStats.videoCount,
      },
      videoStats,
    });
  } catch (err) {
    next(err);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
