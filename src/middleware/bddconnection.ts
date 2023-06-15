import { NextFunction, Request, Response } from "express";
import db from "../config/database";

let connectionTimeout: NodeJS.Timeout | null = null;

const closeConnectionAfterInactivity = () => {
    connectionTimeout = setTimeout(() => {
        db.close().then(() => {
            console.log('Database connection closed due to inactivity');
        });
    }, 0.2 * 60 * 1000);
};

const bddConnectionMiddleware = (req: Request, res: Response, next: NextFunction) => {
    db.authenticate().then(() => {
        clearTimeout(connectionTimeout!);
        closeConnectionAfterInactivity();
        next();
    }).catch((err) => console.log(err));
};

//export { bddConnectionMiddleware };