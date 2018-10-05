import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {customColors} from "../../utility/colors";


const LandingComponent = () => {
    return (
        <div>
            <Row>
                <Col md={6} mdOffset={3} style={{textAlign: 'center'}}>
                    <h1 style={{color: customColors.white}}>LANDING</h1>
                </Col>
            </Row>
        </div>
    )
};

export default LandingComponent;