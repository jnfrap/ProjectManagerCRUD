import { DataTypes } from "sequelize";
import db from "../config/database";

// import { User } from "../interfaces/user";
const UserModel = db.define("User", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    skills: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
    }
},{
    tableName: 'user',
    freezeTableName: true,
    timestamps: false
}
);

export default UserModel;