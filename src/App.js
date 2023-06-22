
import React from 'react';
import { Route, Routes} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import User from "./components/User";
//import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  return (
    <div className="bg-slate-300 text-black h-screen flex text-white">
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user"element={<User />}/>
            <Route path="/register" element={<Register />} />
        </Routes>
    </div>
  );
}

export default App;