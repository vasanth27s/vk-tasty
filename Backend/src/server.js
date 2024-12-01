import express from "express";
import mongoose from "mongoose";
import routes from "./routes/routes.js";
import os from "os";
import "dotenv/config";
import cors from "cors";
import cookieParser from "cookie-parser";

// Initialize the Express app
const app = express();

// CORS options
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:3000', // Update as needed
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
};

// Middleware
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

// Set strictQuery option
mongoose.set("strictQuery", false);

// Routes
app.use("/", routes);

export const startServer = async () => {
  try {
    const port = process.env.PORT || 5000; // Default port
    app.listen(port, () => {
      const networkInterfaces = os.networkInterfaces();
      const ipAddress = Object.values(networkInterfaces)
        .flatMap((ifaces) =>
          ifaces.filter((iface) => !iface.internal && iface.family === "IPv4")
        )
        .map((iface) => iface.address)
        .find(Boolean);

      console.log(`Server is running on http://localhost:${port}`);
      if (ipAddress) {
        console.log(`Locally connected to: http://${ipAddress}:${port}`);
      } else {
        console.log("Unable to determine server IP address.");
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const connectToMongoDB = async () => {
  const options = {
    useNewUrlParser: true,
    maxPoolSize: 10,
    useUnifiedTopology: true,
  };
  const mongoURI = `${process.env.MONGO_URI}/${process.env.DB_NAME}`;

  try {
    await mongoose.connect(mongoURI, options);
    console.log("MongoDB Connected.");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};
