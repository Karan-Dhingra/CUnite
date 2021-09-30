import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import Sidebar from "./sidebar";
import Dashboard from "./dashboard";
import Admin from "./admin";
import Appbar from "./appbar";
import ExploreEvents from "../side-components/explore-events";
import ExploreClubs from "../side-components/explore-clubs";
import ExploreBlogs from "../side-components/explore-blogs";
import Task from "./task";
import MyClub from "./myclub";
import Settings from "./settings";
import Projects from "./projects";
import Inbox from "./inbox";
import Error from "./error";


const Router = (props) => {
    console.log(props);
    return (
        <BrowserRouter>
            <Route path="/">
            </Route>
            <Route path="/dashboard" component={Dashboard} exact="true">
            </Route>
            <Route path="/projects" component={Projects} exact="true">
            </Route>
            <Route path="/inbox" component={Inbox} exact="true">
            </Route>
            <Route path="/explore-clubs" component={ExploreClubs} exact="true">
            </Route>
            <Route path="/explore-events" component={ExploreEvents}></Route>
            <Route path="/explore-blogs" component={ExploreBlogs}>
            </Route>
            <Route path="/taskmanagement" component={Task}></Route>
            <Route path="/chatarea" component={Error}></Route>
            <Route path="/settings" component={Error}></Route>
            <Route path="/calender" component={Error}></Route>
            <Route path="/helpCenter" component={Error}></Route>
        </BrowserRouter>
    );
}

export default Router