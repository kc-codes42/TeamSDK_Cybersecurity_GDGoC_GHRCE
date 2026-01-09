require("dotenv").config();

const express = require("express");
const cors = require("cors");
const limiter = require("./middleware/rateLimit");
const errorHandler = require("./middleware/errorHandler");

const eventRoutes = require("./routes/events.routes");
const queryRoutes = require("./routes/query.routes");

const app = express();

// global middleware
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000"],
}));
app.use(limiter);

// routes
app.use("/events", eventRoutes);
app.use("/query", queryRoutes);

// error handler — ALWAYS LAST
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
