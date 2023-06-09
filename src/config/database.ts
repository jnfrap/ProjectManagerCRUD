import "dotenv/config";
import { Sequelize } from "sequelize";
import fs from 'fs';

const db = new Sequelize({
    database: process.env.POSTGRES_DB,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            require: true,
            ca: fs.readFileSync(__dirname+'/ca.pem').toString()
        }
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

export default db;