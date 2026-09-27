import express from "express";
import connectDB from "./config/database.js";
import cors from "cors";
import HANDLERS from "./handlers/index.js";
import errorMiddleware from "./middlewares/error.js";
import { authMiddleware } from "./middlewares/auth.js";
import destinationRoutes from "./routes/destinations.js";

const app = express();
const port = process.env.PORT;

connectDB();

app.use(cors());
app.use(express.json());

app.use("/destinations", destinationRoutes);
app.use(authMiddleware);
app.use("/", HANDLERS);

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});