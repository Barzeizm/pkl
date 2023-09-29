import { Sequelize } from "sequelize";
import db from "../config/config.js";

const { DataTypes } = Sequelize;

const Users = db.define(
    "users",
    {
        // uuid: {
        //     type: DataTypes.STRING,
        //     defaultValue: DataTypes.UUIDV4,
        //     allowNull: false,
        //     validate: {
        //         notEmpty: true,
        //     },
        // },
        nama: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8, 64],
                notEmpty: true,
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
                notEmpty: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // isLowercase: true, // checks for lowercase
                // isUppercase: true,
                min: 8,
                notEmpty: true,
            },
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: [["admin", "users", "operator"]],
                notEmpty: true,
            },
        },
    },
    {
        freezeTableName: true,
    }
);

(async () => {
    await db.sync();
})();

export default Users;
