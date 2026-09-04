import express from "express"
import dotenv from "dotenv" 
import connectDb from "./config/db.js";
import router from "./routes/auth.route.js";
dotenv.config()

const port = process.env.PORT || 7000;

const app = express();
app.use(express.json());

app.use("/" , router);

app.get("/", (req, res) => {
  res.send("Hello from auth service!");
});

app.listen(port, () => {
  console.log(`Auth service is running on port ${port}`);
  connectDb()
});