import Redis from "ioredis";
import dotenv from "dotenv";
dotenv.config();
const redisClient = () => {
  if (process.env.REDIS_URI) {
    console.log("Redis Connected");
    return process.env.REDIS_URI;
  } else {
    throw new Error("Rdis connection failed");
  }
};

export const redis = new Redis(redisClient());
