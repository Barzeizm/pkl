import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const Ticket = () => {
    return (
        <>
            <Sidebar />
            <Header />
            <div className='absolute top-[3.5rem] left-56 right-0 bottom-0'>Ticket</div>
        </>
    );
};

export default Ticket;
