import express from "express";
import cors from "cors";
import { documents } from "./data/documents";
import { events } from "./data/events";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Simple endpoint for documents
app.get("/api/documents", (req, res) => {
  return res.json(documents);
});

// Simple endpoint for events
app.get("/api/events", (req, res) => {
  return res.json(events);
});

// Root endpoint
app.get("/", (req, res) => {
  res.send("Collaboration Site Backend is running...");
});

app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});