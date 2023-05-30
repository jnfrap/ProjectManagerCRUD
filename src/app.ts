import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes";
import db from "./config/database";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors({origin: ["*"]}));
app.use(express.json());
app.use(router);
db.authenticate().then(() => console.log("Database connected")).catch((err) => console.log(err));

app.listen(PORT, () => { console.log(`Server running on port ${PORT}`); });