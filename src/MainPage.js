import React from 'react';
import './App.css';
import axios from 'axios';
import {GoogleCharts} from 'google-charts'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import PasswordModal from './PasswordModal'

class MainPage extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			showModal : false,
			postPass : ''
		}
//		this.toggleModal = this.toggleModal.bind(this);
//		this.setPostPassword = this.setPostPassword.bind(this);
	}
	toggleModal(){
		if(this.state.showModal){
			this.setState({showModal:false})
		} else {
			this.setState({showModal:true})			
		}
	}
	startpump(pump){
			var ngrokaddr = 'https://19d7bd9d.ngrok.io'

			if(localStorage.ngrok){

				ngrokaddr = localStorage.ngrok
			}

		console.log('starting pump')
		var body = {pump:pump,pass:document.getElementById('postpass').value}
		axios.post(ngrokaddr + '/start', body, {crossdomain:true}).then((res) =>{
			console.log(res)
		}, (err) => {
			console.log(err)
		});
	}
	componentDidMount(){
		this.drawsensorcharts()
		this.drawpumpcharts()
		this.fetchstatus()
		this.fetchthreshold()
	}
	burst(pump, duration){

			var ngrokaddr = 'https://19d7bd9d.ngrok.io'

			if(localStorage.ngrok){

				ngrokaddr = localStorage.ngrok
			}

		console.log('starting pump')
		var body = {pump:pump,duration:duration,pass:document.getElementById('postpass').value}
		axios.post(ngrokaddr + '/burst', body, {crossdomain:true}).then((res) =>{
			console.log(res)
		}, (err) => {
			console.log(err)
		});
	}
	stoppump(pump){

			var ngrokaddr = 'https://19d7bd9d.ngrok.io'

			if(localStorage.ngrok){

				ngrokaddr = localStorage.ngrok
			}

		console.log('stopping pump')
		var body = {pump:pump,pass:document.getElementById('postpass').value}
		axios.post(ngrokaddr + '/stop', body, {crossdomain:true}).then((res) =>{
			console.log(res)
		}, (err) => {
			console.log(err)
		});
	}
	readsensor(sensor){

			var ngrokaddr = 'https://19d7bd9d.ngrok.io'

			if(localStorage.ngrok){

				ngrokaddr = localStorage.ngrok
			}

		var body = {sensor:sensor,pass:document.getElementById('postpass').value}
		axios.post(ngrokaddr + '/sensor', body, {crossdomain:true}).then((res) =>{
			console.log(res)
		}, (err) => {
			console.log(err)
		});
	}
	drawsensorcharts(){

			var ngrokaddr = 'https://19d7bd9d.ngrok.io'

			if(localStorage.ngrok){

				ngrokaddr = localStorage.ngrok
			}

			axios.post(ngrokaddr + '/fetchsensor', {sensorid:1}, {crossdomain:true}).then((res) =>{
				var sensordata =[['Time', 'Reading']]

				res.data.records.forEach(record => sensordata.push([new Date(record.datetime), record.reading]))
				this.drawchartsensor(sensordata, 1)
			}, (err) => {
				console.log(err)
			}).then(axios.post(ngrokaddr + '/fetchsensor', {sensorid:2}, {crossdomain:true}).then((res) =>{
				var sensordata =[['Time', 'Reading']]

				res.data.records.forEach(record => sensordata.push([new Date(record.datetime), record.reading]))
				this.drawchartsensor(sensordata, 2)
			}, (err) => {
				console.log(err)
			}).then(axios.post(ngrokaddr + '/fetchsensor', {sensorid:3}, {crossdomain:true}).then((res) =>{
				var sensordata =[['Time', 'Reading']]

				res.data.records.forEach(record => sensordata.push([new Date(record.datetime), record.reading]))
				this.drawchartsensor(sensordata, 3)
			}, (err) => {
				console.log(err)
			}).then(axios.post(ngrokaddr + '/fetchsensor', {sensorid:4}, {crossdomain:true}).then((res) =>{
				var sensordata =[['Time', 'Reading']]

				res.data.records.forEach(record => sensordata.push([new Date(record.datetime), record.reading]))
				this.drawchartsensor(sensordata, 4)
			}, (err) => {
				console.log(err)
			}))));		
			
	}
	drawchartsensor(sensordata, sensorid){
	
		GoogleCharts.load(drawChart);

		function drawChart() {

		const data = GoogleCharts.api.visualization.arrayToDataTable(sensordata);

		var options = {
			title: 'Pump ' + sensorid + ' Moisture Reading',
			vAxis:{
				viewWindow:{
					max:15000,				
					min:8000
				}		
			}		
		}

		const linechart = new GoogleCharts.api.visualization.LineChart(document.getElementById('sensor' + sensorid + 'chart'))
	
		linechart.draw(data, options)

		}

	}
	drawpumpcharts(){

			var ngrokaddr = 'https://19d7bd9d.ngrok.io'

			if(localStorage.ngrok){

				ngrokaddr = localStorage.ngrok
			}

			axios.post(ngrokaddr + '/fetchpump', {pumpid:1}, {crossdomain:true}).then((res) =>{
				var pumpdata =[['Time', 'ON/OFF']]

				res.data.records.forEach(record => pumpdata.push([new Date(record.datetime), record.value]))
				this.drawchartpump(pumpdata, 1)

				console.log(res.data.records)
			}, (err) => {
				console.log(err)
			}).then(axios.post(ngrokaddr + '/fetchpump', {pumpid:2}, {crossdomain:true}).then((res) =>{
				var pumpdata =[['Time', 'ON/OFF']]

				res.data.records.forEach(record => pumpdata.push([new Date(record.datetime), record.value]))
				this.drawchartpump(pumpdata, 2)
			}, (err) => {
				console.log(err)
			}).then(axios.post(ngrokaddr + '/fetchpump', {pumpid:3}, {crossdomain:true}).then((res) =>{
				var pumpdata =[['Time', 'ON/OFF']]

				res.data.records.forEach(record => pumpdata.push([new Date(record.datetime), record.value]))
				this.drawchartpump(pumpdata, 3)
			}, (err) => {
				console.log(err)
			}).then(axios.post(ngrokaddr + '/fetchpump', {pumpid:4}, {crossdomain:true}).then((res) =>{
				var pumpdata =[['Time', 'ON/OFF']]

				res.data.records.forEach(record => pumpdata.push([new Date(record.datetime), record.value]))
				this.drawchartpump(pumpdata, 4)
			}, (err) => {
				console.log(err)
			}))));		
			
	}
	drawchartpump(pumpdata, pumpid){
	
		GoogleCharts.load(drawChart);

		function drawChart() {

		const data = GoogleCharts.api.visualization.arrayToDataTable(pumpdata);

		var options = {
			title: 'Pump ' + pumpid + ' Activity',
			vAxis:{
				viewWindow:{
					max:2,				
					min:-1
				}		
			}		
		}

		const linechart = new GoogleCharts.api.visualization.LineChart(document.getElementById('pump' + pumpid + 'chart'))
	
		linechart.draw(data, options)

		}

	}
	fetchstatus(){
			var ngrokaddr = 'https://19d7bd9d.ngrok.io'

			if(localStorage.ngrok){

				ngrokaddr = localStorage.ngrok
			}

			axios.post(ngrokaddr + '/fetchstatus',{crossdomain:true}).then((res) =>{
				document.getElementById('checkbox-1').checked = res.data.records[0].status
				document.getElementById('checkbox-2').checked = res.data.records[1].status
				document.getElementById('checkbox-3').checked = res.data.records[2].status
				document.getElementById('checkbox-4').checked = res.data.records[3].status
			})
	}
	updatestatus(id){

		var ngrokaddr = 'https://19d7bd9d.ngrok.io'

		if(localStorage.ngrok){
			ngrokaddr = localStorage.ngrok
		}

		var ischecked = document.getElementById('checkbox-' + id).checked

		var body = {pumpid:id,status:ischecked,pass:document.getElementById('postpass').value}

		axios.post(ngrokaddr + '/updatestatus', body, {crossdomain:true}).then((res) =>{
			console.log(res.data)
		})
	}
	fetchthreshold(){
			var ngrokaddr = 'https://19d7bd9d.ngrok.io'

			if(localStorage.ngrok){
				ngrokaddr = localStorage.ngrok
			}

			axios.post(ngrokaddr + '/fetchthreshold',{crossdomain:true}).then((res) =>{
				document.getElementById('threshold1').value = res.data.records[0].threshold
				document.getElementById('threshold2').value = res.data.records[1].threshold
				document.getElementById('threshold3').value = res.data.records[2].threshold
				document.getElementById('threshold4').value = res.data.records[3].threshold
			})
	}
	updatethreshold(id){
			var ngrokaddr = 'https://19d7bd9d.ngrok.io'

			if(localStorage.ngrok){
				ngrokaddr = localStorage.ngrok
			}

		var body = {pumpid:id, threshold:parseInt(document.getElementById('threshold'+id).value), pass:document.getElementById('postpass').value}
		axios.post(ngrokaddr + '/updatethreshold', body, {crossdomain:true}).then((res) =>{
			console.log(res.data)
		})
	}
	render(){
	  return (
		<div>
			<div className="settings">
				<Form>
					<Form.Group controlId="postpass">
						<Form.Label>Post Password</Form.Label>
						<Form.Control type="text" />
					</Form.Group>
				</Form>
			</div>
			<br></br>
			<div className="pumprow">
				<span>
					<div className="heading">Pump 1</div>
					<Row>
						<Col>
							<div style={{flex:'50%'}} key={'default-checkbox'} className="mb-3" onClick={(e) => this.updatestatus(1)}>
							  <Form.Check 
								type={'checkbox'}
								id={'checkbox-1'}
								label={'Auto Water'}
							  />
							</div>
						</Col>
						<Col>
							<Form>
								<Form.Group as={Row} controlId="threshold1">
									<Form.Label Column sm={2}>Water Threshold</Form.Label>
									<Col sm={10}>
										<Form.Control type="number"></Form.Control>
									</Col>
								</Form.Group>
							</Form>
						</Col>
						<Col>
							<Button onClick={(e) => this.updatethreshold(1)} >Save</Button>
						</Col>
					</Row>
				</span>
				<br></br>
				<div id="sensor1chart"></div>
				<div id="pump1chart"></div>
				<br></br>
				<div className="buttonrow">
					<Button onClick={(e) => this.startpump(1)}>Start</Button>
					<Button onClick={(e) => this.burst(1,1)}>Run 1 Seconds</Button>
					<Button onClick={(e) => this.stoppump(1)}>Stop</Button>
					<Button onClick={(e) => this.readsensor(1)}>Sensor</Button>
				</div>
			</div>
			<br></br>
			<div className="pumprow">
				<span>
					<div className="heading">Pump 2</div>
					<Row>
						<Col>
							<div style={{flex:'50%'}} key={'default-checkbox'} className="mb-3" onClick={(e) => this.updatestatus(2)}>
							  <Form.Check 
								type={'checkbox'}
								id={'checkbox-2'}
								label={'Auto Water'}
							  />
							</div>
						</Col>
						<Col>
							<Form>
								<Form.Group as={Row} controlId="threshold2">
									<Form.Label Column sm={2}>Water Threshold</Form.Label>
									<Col sm={10}>
										<Form.Control type="number"></Form.Control>
									</Col>
								</Form.Group>
							</Form>
						</Col>
						<Col>
							<Button onClick={(e) => this.updatethreshold(2)} >Save</Button>
						</Col>
					</Row>
				</span>
				<br></br>
				<div id="sensor2chart"></div>
				<div id="pump2chart"></div>
				<br></br>
				<div className="buttonrow">
					<Button onClick={(e) => this.startpump(2)}>Start</Button>
					<Button onClick={(e) => this.burst(2,1)}>Run 1 Seconds</Button>
					<Button onClick={(e) => this.stoppump(2)}>Stop</Button>
					<Button onClick={(e) => this.readsensor(2)}>Sensor</Button>
				</div>
			</div>
			<br></br>
			<div className="pumprow">
				<span>
					<div className="heading">Pump 3</div>
					<Row>
						<Col>
							<div style={{flex:'50%'}} key={'default-checkbox'} className="mb-3" onClick={(e) => this.updatestatus(3)}>
							  <Form.Check 
								type={'checkbox'}
								id={'checkbox-3'}
								label={'Auto Water'}
							  />
							</div>
						</Col>
						<Col>
							<Form>
								<Form.Group as={Row} controlId="threshold3">
									<Form.Label Column sm={2}>Water Threshold</Form.Label>
									<Col sm={10}>
										<Form.Control type="number"></Form.Control>
									</Col>
								</Form.Group>
							</Form>
						</Col>
						<Col>
							<Button onClick={(e) => this.updatethreshold(3)} >Save</Button>
						</Col>
					</Row>
				</span>
				<br></br>
				<div id="sensor3chart"></div>
				<div id="pump3chart"></div>
				<br></br>
				<div className="buttonrow">
					<Button onClick={(e) => this.startpump(3)}>Start</Button>
					<Button onClick={(e) => this.burst(3,1)}>Run 1 Seconds</Button>
					<Button onClick={(e) => this.stoppump(3)}>Stop</Button>
					<Button onClick={(e) => this.readsensor(3)}>Sensor</Button>
				</div>
			</div>
			<br></br>
			<div className="pumprow">
				<span>
					<div className="heading">Pump 4</div>
					<Row>
						<Col>
							<div style={{flex:'50%'}} key={'default-checkbox'} className="mb-3" onClick={(e) => this.updatestatus(4)}>
							  <Form.Check 
								type={'checkbox'}
								id={'checkbox-4'}
								label={'Auto Water'}
							  />
							</div>
						</Col>
						<Col>
							<Form>
								<Form.Group as={Row} controlId="threshold4">
									<Form.Label Column sm={2}>Water Threshold</Form.Label>
									<Col sm={10}>
										<Form.Control type="number"></Form.Control>
									</Col>
								</Form.Group>
							</Form>
						</Col>
						<Col>
							<Button onClick={(e) => this.updatethreshold(4)} >Save</Button>
						</Col>
					</Row>
				</span>
				<br></br>
				<div id="sensor4chart"></div>
				<div id="pump4chart"></div>
				<br></br>
				<div className="buttonrow">
					<Button onClick={(e) => this.startpump(4)}>Start</Button>
					<Button onClick={(e) => this.burst(4,1)}>Run 1 Seconds</Button>
					<Button onClick={(e) => this.stoppump(4)}>Stop</Button>
					<Button onClick={(e) => this.readsensor(4)}>Sensor</Button>
				</div>
			</div>
		</div>
	  );
	}
}

export default MainPage;
