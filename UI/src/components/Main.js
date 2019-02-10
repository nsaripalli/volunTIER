import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginPage from './LoginPage'
import Dashboard from './Dashboard'
import ActivityFeed from './ActivityFeed';
import Opportunities from './Opportunities';
import './main.css'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
    <main className="background">
        <Switch>
            <Route exact path='/' component={LoginPage}/>
            <Route path='/dashboard' component={Dashboard}/>
            <Route path='/activity-feed' component={ActivityFeed}/>
            <Route path='/opportunities' component={Opportunities}/>

        </Switch>
    </main>
)

export default Main
