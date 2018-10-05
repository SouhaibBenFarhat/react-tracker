import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Landing from './layout/LandingComponent';
import Login from './auth/LoginComponent';
import Navbar from './layout/Navbar'
import {Grid} from 'react-bootstrap';
import {customColors} from "../utility/colors";
import Paper from '@material-ui/core/Paper';

const router = () => {
    return (
        <BrowserRouter>
            <div>
                <Navbar/>
                <Grid style={{marginTop: 148}}>
                    <Route exact path="/" component={Landing}/>
                    <Route exact path="/login" component={Login}/>
                </Grid>
                <Paper
                    style={{padding: 14, position: 'fixed', bottom: 9, left: 9}}
                    elevation={1}>
                    <div
                        id="timer-container"
                        style={{
                            fontSize: 24,
                            color: customColors.black
                        }}>
                        Loading...
                    </div>
                </Paper>
            </div>
        </BrowserRouter>
    )
};

export default router;
