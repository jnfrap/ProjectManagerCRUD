import { DataTypes } from "sequelize";
import db from "../config/database";

// import { Project } from "../interfaces/project";
const ProjectModel = db.define("Project", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING
    },
    start_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('In progress', 'Completed', 'Cancelled', 'On hold', 'Not started'),
        allowNull: false
    }
});

export default ProjectModel;