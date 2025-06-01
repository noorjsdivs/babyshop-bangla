import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import connectDB from "./config/db.js";

const app = express();

// Load env variable
dotenv.config();
const port = process.env.PORT || 8000;
const admin_url = process.env.ADMIN_URL;

// Connect to database
connectDB();

// Enhanced CORS configuration
app.use(
  cors({
    origin: admin_url,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

// Routes setup
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
  console.log(`Admin URL: ${admin_url}`);
});
