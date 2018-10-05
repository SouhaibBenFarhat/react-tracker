import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {Row, Col} from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {login, logout} from "../../services/auth-service";

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    button: {
        marginTop: theme.spacing.unit,
    },
});


class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errors: {}
        }
    }

    componentDidMount() {
        logout();
    }


    handleUsernameChange = (event) => {
        this.setState({username: event.target.value});
    };

    handlePasswordChange = (event) => {
        this.setState({password: event.target.value});
    };


    validateForm = () => {
        if (this.state.username.length === 0) {
            this.setState({errors: {...{usernameError: 'Username is required.'}}});
            return false;
        }
        if (this.state.password.length === 0) {
            this.setState({errors: {...{passwordError: 'Password is required.'}}});
            return false;
        }

        return true;
    };


    handleSubmit = () => {
        if (this.validateForm()) {
            login(this.state.username, this.state.password).then(() => {
                this.props.history.replace('/')
            })
        }
    };

    render() {
        const {classes} = this.props;
        return (
            <div>
                <Row>
                    <Col mdOffset={3} md={6}>
                        <Paper
                            className={classes.root}
                            elevation={1}>
                            <Typography
                                variant="headline"
                                component="h5">
                                Log in.
                            </Typography>
                            <Typography component="p">
                                Please enter your credentials to log into Time Tracker.
                            </Typography>
                            <Row>
                                <Col md={12}>
                                    <TextField
                                        fullWidth={true}
                                        label="Username"
                                        margin="normal"
                                        error={this.state.errors.usernameError !== undefined}
                                        onChange={this.handleUsernameChange}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12}>
                                    <TextField
                                        fullWidth={true}
                                        label="Password"
                                        margin="normal"
                                        error={this.state.errors.passwordError !== undefined}
                                        onChange={this.handlePasswordChange}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12}>
                                    <Button
                                        variant="contained"
                                        size="large"
                                        color="primary"
                                        fullWidth={true}
                                        onClick={this.handleSubmit}
                                        className={classes.button}>
                                        SIGN IN
                                    </Button>
                                </Col>
                            </Row>
                        </Paper>
                    </Col>
                </Row>
            </div>
        );
    }

}

LoginComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginComponent);