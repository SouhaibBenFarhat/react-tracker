import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Landing from './layout/LandingComponent';
import Login from './auth/LoginComponent';
import Navbar from './layout/Navbar'
import {Grid} from 'react-bootstrap';

const router = () => {
    return (
        <BrowserRouter>
            <div>
                <Navbar/>
                <Grid style={{marginTop: 148}}>
                    <Route exact path="/" component={Landing}/>
                    <Route exact path="/login" component={Login}/>
                </Grid>
            </div>
        </BrowserRouter>
    )
};

export default router;
