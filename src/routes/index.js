import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from 'components/Main';
import Login from 'components/Login';
import Signup from 'components/Signup';
import ConfirmEmail from 'components/Signup/ConfirmEmail';

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/confirm-email" exact component={ConfirmEmail} />
        </Switch>
    );
}

export default Routes;