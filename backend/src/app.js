import express from "express";
import cors from "cors";
import Rulings from "./routes/rulings";

// settings
const app = express();
app.use(cors());
app.set("port", process.env.PORT || 4000);

// middlewares
app.use(express.json());
app.use("/api/rulings", Rulings);

export default app;
