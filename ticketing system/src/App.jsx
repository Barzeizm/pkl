import { useState } from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Ticket from "./pages/Ticket";
import Board from "./pages/Board";
import Report from "./pages/Report";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='ticket' element={<Ticket />} />
                    <Route path='board' element={<Board />} />
                    <Route path='report' element={<Report />} />
                </Routes>
                <Routes>
                    <Route path='login' element={<Login/>}/>
                </Routes>
            </Router>
        </>
    );
}

export default App;
