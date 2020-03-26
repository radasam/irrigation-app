import React from 'react';
import ReactDom from 'react-dom';
import './App.css';

import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


class PumpSettings extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            option: this.props.option,
            forms:1
        }

    }
    settingsHTML(){
        switch(this.state.option){
            case 'Off':
                return <div>Off</div>
            case 'Auto Water':
                return(
                    <div>
                        <Form.Group>
                            <Form.Row>
                                <Form.Label column="sm" lg={2}>Water Threshold</Form.Label>
                                <Col>
                                    <Form.Control type="number"></Form.Control>
                                </Col>
                            </Form.Row>
                        </Form.Group>
                        <Row>
                            <Col>
                                <Button style={{float:'right'}}>Save</Button>
                            </Col>
                        </Row>
                    </div>
                )
            case 'Schedule':
                return(
                    <div>
                        <Form.Group>
                        {[...Array(this.state.forms).keys()].map(i => {
                            return(                            
                                <Form.Row key={i}>
                                    <Form.Label column="sm" lg={0.5}>Time</Form.Label>
                                    <Col>
                                        <Form.Control type="time"></Form.Control>
                                    </Col>    
                                    <Form.Label column="sm" lg={0.5}>Duration</Form.Label>
                                    <Col>
                                    <Form.Control type="number"></Form.Control>
                                    </Col>                           
                                </Form.Row>)
                        })}
                        </Form.Group>
                        <Row>
                            <Col>
                                <Button size="sm" style={{float:'right'}}>Save</Button>
                                <Button size="sm" style={{float:'right',paddingRight:'17px',paddingLeft:'17px', marginRight:'10px'}}>+</Button>
                            </Col>
                        </Row>
                    </div>
                )
            default:
                return <div>null</div>
        }
    }
    switchOption(){
        this.setState({option:document.getElementById('pumpSettingsOption').value})
    }
    addForm(){
        var newforms = this.state.forms + 1
        this.setState({forms:newforms})
    }
	render(){
	  return (
		<div className="pumpsettings">
            <div style={{paddingBottom:'10px'}}>Settings</div>
            <Form>
                <Form.Group onChange={(e) => this.switchOption()} controlId="pumpSettingsOption">
                    <Form.Control as="select">
                        <option>Off</option>
                        <option>Auto Water</option>
                        <option>Schedule</option>
                    </Form.Control>
                </Form.Group>
            </Form>
            {this.settingsHTML()}
		</div>
	  );
	}
}

export default PumpSettings;
