import React, { Component } from 'react';
import '../assets/styles/App.css';
import RouterComponent from './RouterComponent';
import Navbar from './layout/Navbar';
import { Grid } from "react-bootstrap";
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div style={{ marginTop: 148 }}>
          <Grid>
            <RouterComponent />
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;
