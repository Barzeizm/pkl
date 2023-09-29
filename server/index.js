import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import TicketRoute from "./routes/TicketRoute.js"
import UserRoute from "./routes/userRoute.js"
import db from "./config/config.js"
dotenv.config()
const app = express()

// app.get('/api', function (req, res) {
//     res.send();
 
//     // Before res.send()
//     // console.log(res.headersSent);
// });

app.use(express.json())
app.use(
    cors({
        credentials : true,
        origin : "http://localhost:5173"
    })
)
app.use(express.json())
app.use(UserRoute)
app.use(TicketRoute)

app.listen (process.env.PORT, () => console.log(`Server Berjalan ...`));