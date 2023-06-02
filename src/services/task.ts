import TaskModel from "../models/task";
import { Task } from "../interfaces/task";

const insertTaskService = async (Task: Task) => {
    return await TaskModel.build({
        name: Task.name,
        description: Task.description,
        creation_date: Task.creation_date,
        due_date: Task.due_date,
        status: Task.status,
        assigned_to: Task.assigned_to,
        related_project: Task.related_project
    }).save();
}

const getTasksService = async () => {
    return await TaskModel.findAll();
}

const getTaskService = async (id: number) => {
    return await TaskModel.findByPk(id);
}

const updateTaskService = async (id: number, Task: Task) => {
    return await TaskModel.update({
        name: Task.name,
        description: Task.description,
        creation_date: Task.creation_date,
        due_date: Task.due_date,
        status: Task.status,
        assigned_to: Task.assigned_to,
        related_project: Task.related_project
    }, {
        where: {
            id: id
        }
    });
}

const deleteTaskService = async (id: number) => {
    return await TaskModel.destroy({
        where: {
            id: id
        }
    });
}

export {insertTaskService, getTasksService, getTaskService, updateTaskService, deleteTaskService}