import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Main from 'components/Main'
import Login from 'components/Login';

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/login" exact component={Login} />
        </Switch>
    )
}

export default Routes;