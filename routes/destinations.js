import express from "express";
import searchUnsplash from "../services/unsplash.js";

const router = express.Router();

router.get("/image", async (req, res) => {
  try {
    const { query } = req.query;

    if (!query) {
      return res.status(400).json({
        message: "Destination query is required",
      });
    }

    const result = await searchUnsplash(query);

    if (!result) {
      return res.status(404).json({
        message: "No image found",
      });
    }

    res.json(result);
  } catch (error) {
    console.error(
      "Unsplash error:",
      error.response?.data || error.message
    );

    res.status(500).json({
      message: "Failed to fetch destination image",
    });
  }
});

export default router;