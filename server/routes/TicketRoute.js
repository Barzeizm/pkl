import express from "express"
import {
    getAllTickets

} from "../controllers/Tickets.js"

const router = express.Router()

router.get('/api/ticket', getAllTickets);
// router.get('/api/ticket:id', getTicketById);
// router.post('/api/ticket', createTicket);
// router.patch('/api/ticket:id', updateTicket);
// router.delete('/api/ticket', deleteTicket);

export default router;