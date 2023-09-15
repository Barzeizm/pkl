import React, { useState } from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFlag,
    faHome,
    faList,
    faRightFromBracket,
    faXmark,
    faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
    // const [showSidebar, setShowSidebar] = useState(true);

    const menus = [
        {
            name: "Dashboard",
            to: "/",
            icon: faHome,
        },
        {
            name: "Ticket",
            to: "/ticket",
            icon: faList,
        },
        {
            name: "Board",
            to: "/board",
            icon: faSquareCheck,
        },
        {
            name: "Report",
            to: "/report",
            icon: faFlag,
        },
        {
            name: "Logout",
            to: "/login",
            icon: faRightFromBracket,
        },
    ];

    return (
        <>
            <div className="w-56 h-screen bg-white drop-shadow-xl z-10">
                <div className='p-6 font-first font-bold'>
                </div>
                {menus.map((item, index) => (
                    <div key={index}>
                        <NavLink
                            to={item.to}
                            className={({ isActive }) =>
                                isActive
                                    ? "flex items-center gap-6 font-first pr-24 pt-2 pb-2 border-s-4 border-s-sky-500 text-sky-500 bg-slate-100"
                                    : "flex items-center gap-6 font-first pr-24 pt-2 pb-2 border-s-transparent border-s-4 hover:border-sky-500 hover:text-sky-500 transition-all"
                            }
                        >
                            <div>
                                <FontAwesomeIcon icon={item.icon} className='pl-4'/>
                            </div>
                            <div>{item.name}</div>
                        </NavLink>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Sidebar;
