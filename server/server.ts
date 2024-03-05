import { app } from "./app";
import dotenv from "dotenv";
import { connectDB } from "./utils/db";
// dotenv configuration
dotenv.config();

// connecting MONGO DB
connectDB().then(() => console.log("DB connected"));

app.listen(process.env.PORT, () => {
  console.log(`server is running on ${process.env.PORT}`);
});
