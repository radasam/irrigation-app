import React from 'react';
import axios from 'axios'
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
                                    <Form.Control controlId={'threshold'+this.props.id} type="number"></Form.Control>
                                </Col>
                            </Form.Row>
                        </Form.Group>
                        <Row>
                            <Col>
                                <Button onClick={(e) => this.saveSettings()} style={{float:'right'}}>Save</Button>
                            </Col>
                        </Row>
                    </div>
                )
            case 'Schedule':
                return(
                    <div>
                        <Form.Group>
                        {[...Array(this.state.forms).keys()].map(i => {
                            if(i == 0){
                                return(                            
                                    <Form.Row key={i}>
                                        <Form.Label column="sm" lg={0.5}>Time</Form.Label>
                                        <Col>
                                            <Form.Control id={'time-'+ this.props.id + '-' + i} type="time"></Form.Control>
                                        </Col>    
                                        <Form.Label column="sm" lg={0.5}>Duration</Form.Label>
                                        <Col>
                                        <Form.Control id={'duration-'+ this.props.id + '-' + i} type="number"></Form.Control>
                                        </Col>                           
                                    </Form.Row>)
                            } else {
                                return(                            
                                    <Form.Row key={i} style={{paddingTop:'5px'}}>
                                        <Form.Label column="sm" lg={0.5}>Time</Form.Label>
                                        <Col>
                                            <Form.Control id={'time-'+ this.props.id + '-' + i} type="time"></Form.Control>
                                        </Col>    
                                        <Form.Label column="sm" lg={0.5}>Duration</Form.Label>
                                        <Col>
                                        <Form.Control id={'duration-'+ this.props.id + '-' + i} type="number"></Form.Control>
                                        </Col>                           
                                    </Form.Row>)                               
                            }

                        })}
                        </Form.Group>
                        <Row>
                            <Col>
                                <Button onClick={(e) => this.saveSettings()} size="sm" style={{float:'right'}}>Save</Button>
                                <Button onClick={e => this.addForm()} size="sm" style={{float:'right',paddingRight:'17px',paddingLeft:'17px', marginRight:'10px'}}>+</Button>
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
        this.setState({forms:this.state.forms + 1})
    }
    saveSettings(){
        
        var ngrokaddr = 'https://19d7bd9d.ngrok.io'

        if(localStorage.ngrok){

            ngrokaddr = localStorage.ngrok
        }

        var body = {}

        if(this.state.option == 'Schedule'){
            var times = ''
            var durations = ''
            var nextElement = ''
            var scheduleElements = null

            scheduleElements = document.evaluate("//input[contains(@id,'time-1')]",document, null,XPathResult.ORDERED_NODE_ITERATOR_TYPE, null)
            while(nextElement !== null){
                nextElement = scheduleElements.iterateNext()
                if(nextElement){
                    times = times + nextElement.value + ';'
                }
            }
            
            nextElement = ''
            scheduleElements = document.evaluate("//input[contains(@id,'duration-1')]",document, null,XPathResult.ORDERED_NODE_ITERATOR_TYPE, null)
            while(nextElement !== null){
                nextElement = scheduleElements.iterateNext()
                if(nextElement){
                    durations = durations + nextElement.value + ';'
                }
            }

            times = times.substring(0, times.length-1)
            durations = durations.substring(0, durations.length-1)

            body.times = times
            body.durations = durations
        }

        switch(this.state.option){
            case 'Off':
                body = {pumpid:this.props.id,type:'off',pass:document.getElementById('postpass').value}
                break;
            case 'Auto Water':
                body = {pumpid:this.props.id,type:'auto',threshold:parseInt(document.getElementById('threshold'+this.props.id).value), pass:document.getElementById('postpass').value}
                break;
            case 'Schedule':
                body.pumpid = this.props.id
                body.type = 'schedule'
                break;
            default:
                body = {}
        }   

		axios.post(ngrokaddr + '/updatestatus', body, {crossdomain:true}).then((res) =>{
			console.log(res.data)
		})
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
