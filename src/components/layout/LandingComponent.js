import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {customColors} from "../../utility/colors";
import OverviewComponent from "./OverviewComponent";


const LandingComponent = () => {
    return (
        <div>
            <Row>
                <Col md={6} mdOffset={3} style={{textAlign: 'center'}}>
                    <h1 style={{color: customColors.white}}>OVERVIEW</h1>
                </Col>
            </Row>
            <Row style={{marginTop: 24}}>
                <OverviewComponent/>
            </Row>
        </div>
    )
};

export default LandingComponent;