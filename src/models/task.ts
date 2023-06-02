import { DataTypes } from "sequelize";
import db from "../config/database";

// import { Task } from "../interfaces/task";
const TaskModel = db.define("Task", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING
    },
    creation_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    due_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('In progress', 'Completed', 'Cancelled', 'On hold', 'Not started'),
        allowNull: false
    },
    assigned_to: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    related_project: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    tableName: 'task',
    freezeTableName: true,
    timestamps: false
}
);

export default TaskModel;