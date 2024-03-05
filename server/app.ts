import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import { Request, Response } from "express";
export const app = express();

dotenv.config();
// body-parser
app.use(express.json({ limit: "50mb" }));

// cookie parser
app.use(cookieParser());

app.use(
  cors({
    origin: process.env.ORIGIN,
  })
);

app.all("*", (req: Request, res: Response) => {
  const err = new Error(`${req.originalUrl} Not Found`);
  res.status(404).json({
    success: false,
    err,
  });
});
