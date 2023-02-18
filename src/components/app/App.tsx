import React from 'react';
import { Login } from "../auth/Login";
import { Route, Routes } from "react-router-dom";
import { HotelsCheck } from "../hotelsCheck/HotelsCheck";

function App() {
    return (
        // <Routes>
        //     <Route path="/" element={<Login/>}/>
        //     <Route path="hotels" element={<HotelsCheck/>}/>
        // </Routes>
        <div>
            {/*<Login/>*/}
            <HotelsCheck/>
        </div>


    );
}

export default App;
