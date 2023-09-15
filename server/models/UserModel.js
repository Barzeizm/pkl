import { Sequelize } from "sequelize";
import db from "../config/config.js";

const {DataTypes} = Sequelize;

const Users = db.define(
    "users",
    {
        uuid: {
            type: DataTypes.STRING,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
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
                is: ["^[a-z]+$", "i"],
                notEmpty: true,
            },
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
    },
    {
        freezeTableName: true,
    }
);

export default Users;
