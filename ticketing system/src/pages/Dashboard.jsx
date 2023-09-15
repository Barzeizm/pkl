import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const Dashboard = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <div className='absolute top-[4rem] left-56 right-0 bottom-0'>
              <div className='bg-sky-200'>p</div>
            </div>
        </>
    );
};

export default Dashboard;
