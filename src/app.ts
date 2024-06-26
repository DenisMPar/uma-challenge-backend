import express from "express";
import api from "./api";
import cors from "cors";
import { initDatabase } from "./DB/connect";

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/v1", api);

initDatabase();
export default app;
