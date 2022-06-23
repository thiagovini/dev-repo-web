import React from "react";

import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom"

import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";

const AppRouter = () => {
    return(
        <Router>
            <Routes>
                <Route exact path="/login" element={<LoginPage/>}/>
                <Route exact path="/" element={<MainPage/>}/>
            </Routes>
        </Router>
    )
}

export default AppRouter;