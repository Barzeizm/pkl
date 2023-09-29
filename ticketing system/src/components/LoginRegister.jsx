import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginRegister = () => {
    const [buttonClicked, setButtonClicked] = useState(true);
    const navigate = useNavigate();
    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [matchPwd, setMatchPwd] = useState("");
    const [role, setRole] = useState("");
    const [msg, setMsg] = useState("");
    const [loginData, setLoginData] = useState({
        nama: nama,
        password: password,
    });
    const [registerData, setRegisterData] = useState({
        nama: nama,
        email: email,
        password: password,
        matchPwd: matchPwd,
        role: role,
    });

    // const handleLoginInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setLoginData({
    //         ...loginData,
    //         [name]: value,
    //     });
    // };

    const handleRegisterInput = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:4096/api/users", {
                nama: nama,
                email: email,
                password: password,
                matchPwd: matchPwd,
                role: role,
            });
            setNama("");
            setEmail("");
            setPassword("");
            setMatchPwd("");
            setRole("");
            navigate("/login");
            toast.success("Registrasi Berhasil", {
                  position: "top-center",
                  autoClose: 1500,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
              })
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
                toast.warning("Registrasi Gagal", {
                  position: "top-center",
                  autoClose: 1500,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
              });
            }
        }
    };

    const toggleButton = () => {
        setButtonClicked(!buttonClicked);
    };

    return (
        <>
            <div className=' flex items-center justify-center flex-row bg-sky-900 w-screen h-screen'>
                <div className='flex items-center bg-sky-300 w-4/6 h-[550px]'>
                    <button
                        className={`bg-white h-12 w-40 translate-x-44 ${
                            buttonClicked
                                ? "transition-transform duration-500"
                                : "translate-x-[46rem] transition-transform duration-500"
                        }`}
                        onClick={toggleButton}
                    >
                        {buttonClicked ? "Register" : "Login"}
                    </button>
                    <div
                        className={`relative left-[22.4rem] flex justify-center w-[550px] h-full bg-slate-300 ${
                            buttonClicked
                                ? "transition-transform duration-500"
                                : "-translate-x-[32.3rem] transition-transform duration-500"
                        }`}
                    >
                        {buttonClicked ? (
                            <form
                                className='flex items-center justify-center flex-col gap-6 w-full'
                                id='login'
                            >
                                <input
                                    type='text'
                                    placeholder='username'
                                    className='h-10 w-4/6 border-b-2 border-b-slate-950 bg-transparent focus:outline-none'
                                    name='username'
                                />
                                <input
                                    type='password'
                                    placeholder='password'
                                    className='h-10 w-4/6 border-b-2 border-b-slate-950 bg-transparent focus:outline-none'
                                    name='password'
                                />
                                <button
                                    type='submit'
                                    className='w-32 h-10 border-2 border-slate-950'
                                >
                                    Login
                                </button>
                            </form>
                        ) : (
                            <form
                                className='flex items-center justify-center flex-col gap-6 w-full'
                                onSubmit={handleRegisterInput}
                                id='register'
                            >
                                <p className='has-text-centered'>{msg}</p>
                                <input
                                    type='text'
                                    placeholder='username'
                                    className='h-10 w-4/6 border-b-2 border-b-slate-950 bg-transparent focus:outline-none'
                                    value={nama}
                                    onChange={(e) => setNama(e.target.value)}
                                />
                                <input
                                    type='email'
                                    placeholder='email'
                                    className='h-10 w-4/6 border-b-2 border-b-slate-950 bg-transparent focus:outline-none'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input
                                    type='password'
                                    placeholder='password'
                                    className='h-10 w-4/6 border-b-2 border-b-slate-950 bg-transparent focus:outline-none'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <input
                                    type='password'
                                    placeholder='password'
                                    className='h-10 w-4/6 border-b-2 border-b-slate-950 bg-transparent focus:outline-none'
                                    value={matchPwd}
                                    onChange={(e) => setMatchPwd(e.target.value)}
                                />
                                <select
                                    name='role'
                                    id=''
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                >
                                    <option>Pilih Role</option>
                                    <option value='admin'>Admin</option>
                                    <option value='users'>User</option>
                                    <option value='operator'>Operator</option>
                                </select>
                                <button
                                    type='submit'
                                    className='w-32 h-10 border-2 border-slate-950'
                                >
                                    Register
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default LoginRegister;
