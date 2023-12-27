import React from "react";
import {Route, Switch} from 'react-dom'
import CarSelection from "./CarSelection";
import Timer from "./Timer";
import Clock from "./Clock";


function Routes () {

    return (
        <Switch>
            <Route path = "/" component = {Timer} />
            <Route path = "/CarSelection" component = {CarSelection} />
            <Route path = "/Clock" component = {Clock} />
        </Switch>
    )
}