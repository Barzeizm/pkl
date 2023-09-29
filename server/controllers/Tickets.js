import Ticket from "../models/TicketsModel.js";
import Users from "../models/UserModel.js";

export const getAllTickets = async (req, res) => {
    try {
        const response = await Ticket.findAll({
            attributes: ["id", "title", "description"],
            include: [{ model: Users, attributes: ["nama", "email"], required: true }],
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};
// export const getTicketById = (req,res) => {

// }
// export const createTicket = (req,res) => {

// }
// export const updateTicket = (req,res) => {

// }
// export const deleteTicket = (req,res) => {

// }
