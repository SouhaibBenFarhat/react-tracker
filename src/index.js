import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import RouterComponent from './components/RouterComponent';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        fontSize: 20,
    },
});


ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <RouterComponent/>
    </MuiThemeProvider>
    , document.getElementById('root'));
