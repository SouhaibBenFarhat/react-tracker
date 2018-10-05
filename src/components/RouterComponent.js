import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Landing from './layout/LandingComponent';
import Login from './auth/LoginComponent';

const router = () => {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Landing} />
                <Route exact path="/login" component={Login} />
            </div>
        </BrowserRouter>
    )
}

export default router;
