import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from 'components/Main';
import Login from 'components/Login';
import Logout from 'components/Login/Logout';
import Signup from 'components/Signup';
import ConfirmEmail from 'components/Signup/ConfirmEmail';
import Vote from 'components/Vote';

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/vote" exact component={Vote} />
            <Route path="/search" exact component={Main} />
            <Route path="/login" exact component={Login} />
            <Route path="/logout" exact component={Logout} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/confirm-email" exact component={ConfirmEmail} />
        </Switch>
    );
}

export default Routes;