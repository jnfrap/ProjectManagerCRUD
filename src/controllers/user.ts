import { Request, Response } from 'express';
import { handleHttp } from '../utils/error.handle';
import { insertUserService, getUsersService, getUserService, updateUserService, deleteUserService } from '../services/user';

const getUser = async (req: Request, res: Response) => {
    try {
        res.send(await getUserService(Number(req.params.id) || -1) || 'NOT_FOUND');
    }catch (e) {
        handleHttp(res, 'ERROR_GET_USER', e);
    }
}

const getUsers = async (req: Request, res: Response) => {
    try {
        res.send(await getUsersService() || 'NOT_FOUND');
    }catch (e) {
        handleHttp(res, 'ERROR_GET_USERS', e);
    }
}

const updateUser = async (req: Request, res: Response) => {
    try {
        res.send(await updateUserService(Number(req.params.id) || -1, req.body));
    }catch (e) {
        handleHttp(res, 'ERROR_UPDATE_USER', e);
    }
}

const postUser = async (req: Request, res: Response) => {
    try {
        res.send(await insertUserService(req.body));
    }catch (e) {
        handleHttp(res, 'ERROR_POST_USER', e);
    }
}

const deleteUser = async (req: Request, res: Response) => {
    try {
        const deletedRows = await deleteUserService(Number(req.params.id) || -1);
        if (deletedRows > 0) {
            res.sendStatus(200);
        }else {
            res.sendStatus(404);
        }
    }catch (e) {
        handleHttp(res, 'ERROR_DELETE_USER', e);
    }
}

export { getUser, getUsers, updateUser, postUser, deleteUser }