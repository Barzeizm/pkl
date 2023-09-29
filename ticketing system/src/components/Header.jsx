import React, { useState } from "react";
import profile from "../assets/profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowAltCircleDown,
    faArrowCircleDown,
    faArrowDown,
    faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    const [dropDown, setDropDown] = useState(false);

    return (
        <>
            <div className='flex items-center justify-end absolute top-0 left-56 right-0 bottom-0 h-16'>
                <div className='flex items-center gap-2 pr-10'>
                    <div className='font-kanit text-lg'>Ajul420@gmail.com</div>
                    <div className=''>
                        <img src={profile} alt='' className='flex justify-between w-12' />
                    </div>
                    <FontAwesomeIcon
                        icon={faChevronDown}
                        className={`${
                            dropDown
                                ? "cursor-pointer rotate-180 transition-all"
                                : "cursor-pointer rotate-360 transition-all"
                        }`}
                        onClick={() => setDropDown((prev) => !prev)}
                    />
                    {dropDown && (
                        <div className='bg-slate-700 w-56 h-40 absolute right-10 top-16'>
                            <li>Setting</li>
                            <li>Setting</li>
                            <li>Setting</li>
                            <li>Setting</li>
                        </div>
                    )}
                </div>
                {/* <div className='bg-sky-700 h-14 col-span-3'>p</div>
                <div className='bg-sky-700 h-14 col-span-3 col-start-4'>p</div> */}
            </div>
        </>
    );
};

export default Header;
