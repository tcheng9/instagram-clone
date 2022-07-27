import {BrowserRouter, Routes, Route} from "react-router-dom";
import AddPic from "./addPic";
import Profile from "./profile";
import Login from "./login";
import HomePage from "./home";
import App from "../App";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/" element = {<App />} />
                <Route path = "/addPicture" element = {<AddPic />} />
                <Route path = "/login" element = {<Login />} />
                <Route path = "/home" element = {<HomePage />} />
                <Route path = "/profile" element = {<Profile />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;