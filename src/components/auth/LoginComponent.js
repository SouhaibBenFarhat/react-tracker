import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Row, Col } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    }
});

function LoginComponent(props) {
    const { classes } = props;

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
                            <TextField
                                fullWidth={true}
                                id="standard-name"
                                label="Name"
                                className={classes.textField}
                                margin="normal"
                            />
                        </Row>
                    </Paper>
                </Col>
            </Row>
        </div>
    );
}

LoginComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginComponent);