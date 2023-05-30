import { Request, Response } from 'express';
import { handleHttp } from '../utils/error.handle';
import { insertProjectService, getProjectsService, getProjectService, updateProjectService, deleteProjectService } from '../services/project';

const getProject = async (req: Request, res: Response) => {
    try {
        res.send(await getProjectService(Number(req.params.id) || -1) || 'NOT_FOUND');
    }catch (e) {
        handleHttp(res, 'ERROR_GET_PROJECT', e);
    }
}

const getProjects = async (req: Request, res: Response) => {
    try {
        res.send(await getProjectsService() || 'NOT_FOUND');
    }catch (e) {
        handleHttp(res, 'ERROR_GET_PROJECTS', e);
    }
}

const updateProject = async (req: Request, res: Response) => {
    try {
        res.send(await updateProjectService(Number(req.params.id) || -1, req.body));
    }catch (e) {
        handleHttp(res, 'ERROR_UPDATE_PROJECT', e);
    }
}

const postProject = async (req: Request, res: Response) => {
    try {
        res.send(await insertProjectService(req.body));
    }catch (e) {
        handleHttp(res, 'ERROR_POST_PROJECT', e);
    }
}

const deleteProject = async (req: Request, res: Response) => {
    try {
        const deletedRows = await deleteProjectService(Number(req.params.id) || -1);
        if (deletedRows > 0) {
            res.sendStatus(200);
        }else {
            res.sendStatus(404);
        }
    }catch (e) {
        handleHttp(res, 'ERROR_DELETE_PROJECT', e);
    }
}

export { getProject, getProjects, updateProject, postProject, deleteProject }