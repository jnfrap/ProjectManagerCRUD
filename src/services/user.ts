import UserModel from "../models/user";
import { User } from "../interfaces/user";

const insertUserService = async (User: User) => {
    return await UserModel.build({
        name: User.name,
        role: User.role,
        email: User.email,
        skills: User.skills
    }).save();
}

const getUsersService = async () => {
    return await UserModel.findAll();
}

const getUserService = async (id: number) => {
    return await UserModel.findByPk(id);
}

const updateUserService = async (id: number, User: User) => {
    return await UserModel.update({
        name: User.name,
        role: User.role,
        email: User.email,
        skills: User.skills
    }, {
        where: {
            id: id
        }
    });
}

const deleteUserService = async (id: number) => {
    return await UserModel.destroy({
        where: {
            id: id
        }
    });
}

export {insertUserService, getUsersService, getUserService, updateUserService, deleteUserService}