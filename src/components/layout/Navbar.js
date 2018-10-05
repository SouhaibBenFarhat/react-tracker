import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {withRouter} from 'react-router-dom'
import {logout} from "../../services/auth-service";

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    }
};

class Navbar extends Component {


    constructor(props) {
        super(props);
        this.state = {
            showLogoutButton: true
        }
    }


    componentDidMount() {
        this.onRouteChanged();
    }

    handleLogoutClick = () => {
        logout().then(() => {
            this.props.history.replace('/login')
        })
    };

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            this.onRouteChanged();
        }
    }

    onRouteChanged = () => {
        const pathName = this.props.location.pathname;
        if (pathName === '/login')
            this.setState({showLogoutButton: false});
        else if (!this.state.showLogoutButton)
            this.setState({showLogoutButton: true})
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <Typography variant="title" color="inherit" className={classes.grow}>
                            Time Tracker.
                        </Typography>
                        {
                            this.state.showLogoutButton
                                ?
                                <Button
                                    onClick={this.handleLogoutClick}
                                    variant="contained"
                                    color="default">
                                    Logout
                                </Button>
                                :
                                ""
                        }
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
};


export default withRouter(withStyles(styles)(Navbar));