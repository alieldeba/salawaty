const express = require("express");
const morgan = require("morgan");
const env = require("dotenv");

env.config();

const connectToDB = require("./config/database");
const statsRoute = require("./routes/statsRoute");
const achievementRoute = require("./routes/achievementRoute");

// Database
connectToDB();

const app = express();

// Middleware
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log(`✅ ${process.env.NODE_ENV} mode is on`);
} else {
  console.log(`✅ ${process.env.NODE_ENV} mode is on`);
}

app.use(`${process.env.BASE_URL}/stats`, statsRoute);
app.use(`${process.env.BASE_URL}/achievements`, achievementRoute);

app.all("*", (req, res, next) => {
  res.status(404).json({
    msg: "No Route Found",
  });
});

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
  console.log(`✅ listening on localhost:${PORT}`);
});

process.on("unhandledRejection", (err) => {
  console.error(`Unhandled Rejection Error: ${err.name} | ${err.message}`);
  server.close(() => {
    console.log("Shutting down...");
    process.exit(1);
  });
});
