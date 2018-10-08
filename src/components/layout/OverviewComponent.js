import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import {loadOverview} from "../../services/overview-service";
import {convertToBarChartData, extractOverview} from "../../converters/visit-converter";
import {BarChart} from 'react-d3-components';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
});

class OverviewComponent extends Component {


    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true
        }
    }

    componentDidMount() {
        this.setState({loading: true});
        loadOverview().then((data) => {
            this.setState({data: convertToBarChartData(extractOverview(data))}, () => {
                this.setState({loading: false});
            });
        }).catch((err) => {
            console.error(err);
            this.setState({loading: false});
        });
    }

    render() {

        const {classes} = this.props;

        return (
            <div>
                <Paper className={classes.root} elevation={1}>
                    <Row>
                        <Col md={12}>
                            <Typography variant="headline" component="h3">
                                Time Tracking overview.
                            </Typography>
                            <Typography component="p">
                                Through this graph, you can get an overview about how much time (minutes) users spent in
                                your different website pages.
                            </Typography>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} style={{marginTop: 48, textAlign: 'center'}}>
                            {!this.state.loading
                                ?
                                <BarChart
                                    colorByLabel={false}
                                    data={this.state.data}
                                    width={800}
                                    height={400}
                                    margin={{top: 10, bottom: 50, left: 50, right: 10}}/>
                                :
                                ""}
                        </Col>
                    </Row>
                </Paper>
            </div>
        )
    }
}

export default withStyles(styles)(OverviewComponent);