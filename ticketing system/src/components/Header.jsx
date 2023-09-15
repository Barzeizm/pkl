import React from "react";
import profile from "../assets/profile.png";

const Header = () => {
    return (
        <>
            <div className='flex items-center justify-between absolute top-0 left-56 right-0 bottom-0 h-16'>
                <div className=''>Header</div>
                <div className='flex justify-between items-center gap-2 pr-10'>
                    <div className='font-kanit text-lg'>Ajul420@gmail.com</div>
                    <div>
                        <img src={profile} alt='' className='flex justify-between w-12' />
                    </div>
                </div>
                {/* <div className='bg-sky-700 h-14 col-span-3'>p</div>
                <div className='bg-sky-700 h-14 col-span-3 col-start-4'>p</div> */}
            </div>
        </>
    );
};

export default Header;
