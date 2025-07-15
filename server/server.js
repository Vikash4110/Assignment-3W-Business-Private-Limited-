require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDb = require("./utils/db");
const userRoutes = require("./routes/user-route");

const app = express();
const PORT = process.env.PORT || 8000;

// CORS configuration
app.use(
  cors({
    origin: ["http://localhost:3000", "https://study-management.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());
app.use("/api/users", userRoutes);

connectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
  });
