import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import axios from "axios"

const Dashboard = () => {

    const [tickets, setTickets] = useState([])

    useEffect(() => {
        getAllTickets();
      }, []);
    

    const getAllTickets = async () => {
        const response = await axios.get("http://localhost:4096/api/ticket");
        setTickets(response.data);
        console.log(response.data)
      };

    return (
        <>
            <Header title="Dashboard"/>
            <Sidebar />
            <div className='absolute top-[4rem] left-56 right-0 bottom-0'>
              <div className=''>
                {tickets.map((ticket, index) => (
                    <ul key={index}>
                        <li>{ticket.title}</li>
                        <li>{ticket.user.nama}</li>
                    </ul>
                ))}
              </div>
            </div>
        </>
    );
};

export default Dashboard;
