import { NextFunction, Request, Response } from "express";
import db from "../config/database";

let connectionTimeout: NodeJS.Timeout | null = null;

const closeConnectionAfterInactivity = () => {
    connectionTimeout = setTimeout(() => {
        db.close().then(() => {
            console.log('Database connection closed due to inactivity');
        });
    }, 5 * 60 * 1000);
};

const bddConnectionMiddleware = (req: Request, res: Response, next: NextFunction) => {
    db.authenticate().then().catch((err) => console.log(err));
    clearTimeout(connectionTimeout!);
    closeConnectionAfterInactivity();
    next();
};

export { bddConnectionMiddleware };