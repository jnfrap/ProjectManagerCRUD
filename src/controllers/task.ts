import { Request, Response } from 'express';
import { handleHttp } from '../utils/error.handle';
import { insertTaskService, getTasksService, getTaskService, updateTaskService, deleteTaskService } from '../services/task';
import { Task } from '../interfaces/task';

const getTask = async (req: Request, res: Response) => {
    try {
        res.send(await getTaskService(Number(req.params.id) || -1) || 'NOT_FOUND');
    }catch (e) {
        handleHttp(res, 'ERROR_GET_TASK', e);
    }
}

const getTasks = async (req: Request, res: Response) => {
    try {
        res.send(await getTasksService() || 'NOT_FOUND');
    }catch (e) {
        handleHttp(res, 'ERROR_GET_TASKS', e);
    }
}

const updateTask = async (req: Request, res: Response) => {
    try {
        res.send(await updateTaskService(Number(req.params.id) || -1, req.body));
    }catch (e) {
        handleHttp(res, 'ERROR_UPDATE_TASK', e);
    }
}

const postTask = async (req: Request, res: Response) => {
    try {
        const t: Task = req.body;
        t.creation_date = new Date();
        res.send(await insertTaskService(t));
    }catch (e) {
        handleHttp(res, 'ERROR_POST_TASK', e);
    }
}

const deleteTask = async (req: Request, res: Response) => {
    try {
        const deletedRows = await deleteTaskService(Number(req.params.id) || -1);
        if (deletedRows > 0) {
            res.sendStatus(200);
        }else {
            res.sendStatus(404);
        }
    }catch (e) {
        handleHttp(res, 'ERROR_DELETE_TASK', e);
    }
}

export { getTask, getTasks, updateTask, postTask, deleteTask }