import Ticket from "../models/TicketsModel.js";

export const getAllTickets = async(res) => {
    try{
        const response = await Ticket.findAll();
        res.status(200).json(response);
    } catch (error){
        res.status(500).json({msg : error.message})
    }
}
// export const getTicketById = (req,res) => {

// }
// export const createTicket = (req,res) => {

// }
// export const updateTicket = (req,res) => {

// }
// export const deleteTicket = (req,res) => {

// }