import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes";
import { bddConnectionMiddleware } from "./middleware/bddconnection";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors({origin: ["*"]}));
app.use(express.json());
app.use(bddConnectionMiddleware);
app.use(router);

app.listen(PORT, () => { console.log(`Server running on port ${PORT}`); });