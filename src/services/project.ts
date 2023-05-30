import ProjectModel from "../models/project";
import { Project } from "../interfaces/project";

const insertProjectService = async (Project: Project) => {
    return await ProjectModel.build({
        name: Project.name,
        description: Project.description,
        start_date: Project.start_date,
        end_date: Project.end_date,
        status: Project.status
    }).save();
}

const getProjectsService = async () => {
    return await ProjectModel.findAll();
}

const getProjectService = async (id: number) => {
    return await ProjectModel.findByPk(id);
}

const updateProjectService = async (id: number, Project: Project) => {
    return await ProjectModel.update({
        name: Project.name,
        description: Project.description,
        start_date: Project.start_date,
        end_date: Project.end_date,
        status: Project.status
    }, {
        where: {
            _id: id
        }
    });
}

const deleteProjectService = async (id: number) => {
    return await ProjectModel.destroy({
        where: {
            _id: id
        }
    });
}

export {insertProjectService, getProjectsService, getProjectService, updateProjectService, deleteProjectService}