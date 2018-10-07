import React from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom'
import Landing from './layout/LandingComponent';
import Login from './auth/LoginComponent';
import Navbar from './layout/Navbar'
import {Grid} from 'react-bootstrap';
import {customColors} from "../utility/colors";
import Paper from '@material-ui/core/Paper';
import {isLoggedIn} from "../services/auth-service";


const router = () => {
    return (
        <BrowserRouter>
            <div>
                <Navbar/>
                <Grid style={{marginTop: 148}}>
                    <Route exact path="/" render={() => {
                        if (!isLoggedIn()) {
                            return <Redirect to="/login"/>
                        } else {
                            return <Landing/>
                        }
                    }}/>
                    <Route exact path="/login" component={Login}/>
                </Grid>
                <Paper
                    style={{padding: 14, position: 'fixed', bottom: 9, left: 9}}
                    elevation={1}>
                    <div
                        id="timer-container"
                        style={{
                            fontSize: 20,
                            color: customColors.black
                        }}>
                        Please login.
                    </div>
                </Paper>
            </div>
        </BrowserRouter>
    )
};

export default router;
