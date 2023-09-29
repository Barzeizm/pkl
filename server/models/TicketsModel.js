import { Sequelize } from "sequelize";
import db from "../config/config.js";
import Users from "./UserModel.js";

const DataTypes = Sequelize;

const Ticket = db.define(
    "tickets",
    {
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
    },
    );
    
Users.hasMany(Ticket, { foreignKey: "userId" });
Ticket.belongsTo(Users);

(async()=>{
    await db.sync();
})();

export default Ticket;
