import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}/`;
const router = Router();

const clearFileName = (fileName: string) => {
    return fileName.split(".")[0];
};

readdirSync(PATH_ROUTER).filter((fileName) => {
    const name = clearFileName(fileName);
    if (name !== "index"){
        import(`./${name}`).then((module) => {
            router.use(`/${name}`, module.router);
        });
    }
});

export { router };