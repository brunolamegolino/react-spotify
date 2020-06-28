import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Login from '../containers/Login/Login'
import Authorize from '../containers/Authorize/Authorize'
import Dashboard from '../containers/Dashboard/Dashboard'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Login} />

            <Route path="/authorize" component={Authorize} />
            <Route path="/dashboard" component={Dashboard} />
        </Switch>
    )
}

export default Routes