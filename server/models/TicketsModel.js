import { Sequelize } from "sequelize";
import db from "../config/config.js";
import Users from "./UserModel.js";

const DataTypes = Sequelize;

const Ticket = db.define(
    "tickets",
    {
        ticketid: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
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
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        userId: {
            type: DataTypes.INTEGER,
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

Users.hasMany(Ticket);
Ticket.belongsTo(Users, { foreignKey: "userId" });

export default Ticket;
