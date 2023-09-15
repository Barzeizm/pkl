import React, { useState } from "react";

const LoginRegister = () => {
    const [buttonClicked, setButtonClicked] = useState(true);

    const toggleButton = () => {
        setButtonClicked(!buttonClicked);
    };

    return (
        <>
            <div className='flex justify-center items-center bg-first-color w-full min-h-screen'>
                <div className={`bg-sky-400 w-[65%] h-[30rem] `}>
                    <div className=''>
                        <button
                            className={`bg-white w-56 h-11 relative bottom-0 left-40 top-48 ${
                                buttonClicked
                                    ? "transition-all ease-in duration-700"
                                    : "transition-all ease-in duration-700 translate-x-[230%]"
                            }`}
                            onClick={toggleButton}
                        >
                            {buttonClicked ? "Register" : "Login"}
                        </button>
                    </div>
                </div>
                <div
                    className={`flex justify-center items-center w-[32%] h-[45rem] absolute right-[17.5rem] border-1 border-4 bg-black ${
                        buttonClicked
                            ? "transition-all ease-in duration-700 overflow-x-hidden"
                            : "transition-all ease-in duration-700 translate-x-[-103%] overflow-x-hidden"
                    }`}
                >
                    <form className='bg-sky-900 w-9/12 h-5/6 z-50'>
                        <input
                            className={` ${
                                buttonClicked
                                    ? "opacity-0 translate-x-[-100%] transition-all ease-out duration-700"
                                    : "transition-all ease-in duration-[1s] delay-500"
                            }`}
                            type='text'
                            placeholder='pee'
                        />
                        <br />
                        <input
                            className={` ${
                                buttonClicked
                                    ? "opacity-0 translate-x-[-100%] transition-all ease-out duration-700"
                                    : "transition-all ease-in duration-[1s] delay-500"
                            }`}
                            type='text'
                            placeholder='pee'
                        />
                    </form>
                </div>
            </div>
        </>
    );
};

export default LoginRegister;
