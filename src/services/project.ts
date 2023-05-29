import ProjectModel from "../models/project";
import { Project } from './../interfaces/project';

const insertProjectService = async (Project: Project) => {
    return await ProjectModel.create(Project);
}

const getProjectsService = async () => {
    return await ProjectModel.find();
}

const getProjectService = async (id: string) => {
    return await ProjectModel.findOne({_id: id});
}

const updateProjectService = async (id: string, Project: Project) => {
    return await ProjectModel.findOneAndUpdate({_id: id}, Project, {new: true});
}

const deleteProjectService = async (id: string) => {
    return await ProjectModel.deleteOne({_id: id});
}

export {insertProjectService, getProjectsService, getProjectService, updateProjectService, deleteProjectService}