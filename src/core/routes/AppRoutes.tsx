import { Route, Routes } from "react-router-dom";
import { Login } from "../auth/Login";
import { HotelsCheck } from "../hotelsCheck/HotelsCheck";
import React from "react";
import { paths } from "./paths";
import { NotFoundPage } from "../notExist/NotExist";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path={paths.main()} element={<Login/>}/>
            <Route path={paths.hotels()} element={<HotelsCheck/>}/>
            <Route path={"*"} element={<NotFoundPage/>}/>
        </Routes>
    );
}