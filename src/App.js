import React from 'react';
import './App.css';
import axios from 'axios';
import {GoogleCharts} from 'google-charts'

import Navbar from 'react-bootstrap/Navbar'
import {Button} from 'react-bootstrap'


class App extends React.Component{
	startpump(pump){
		console.log('starting pump')
		var body = {pump:pump}
		axios.post('http://192.168.1.88:4000/start', body, {crossdomain:true}).then((res) =>{
			console.log(res)
		}, (err) => {
			console.log(err)
		});
	}
	componentDidMount(){


		this.drawsensorcharts()
		this.drawpumpcharts()
	}
	burst(pump, duration){
		console.log('starting pump')
		var body = {pump:pump,duration:duration}
		axios.post('http://192.168.1.88:4000/burst', body, {crossdomain:true}).then((res) =>{
			console.log(res)
		}, (err) => {
			console.log(err)
		});
	}
	stoppump(pump){
		console.log('stopping pump')
		var body = {pump:pump}
		axios.post('http://192.168.1.88:4000/stop', body, {crossdomain:true}).then((res) =>{
			console.log(res)
		}, (err) => {
			console.log(err)
		});
	}
	readsensor(sensor){
		var body = {sensor:sensor}
		axios.post('http://192.168.1.88:4000/test', body, {crossdomain:true}).then((res) =>{
			console.log(res)
		}, (err) => {
			console.log(err)
		});
	}
	drawsensorcharts(){

			axios.post('http://192.168.1.88:4000/fetchsensor', {sensorid:1}, {crossdomain:true}).then((res) =>{
				var sensordata =[['Time', 'Reading']]

				res.data.records.forEach(record => sensordata.push([new Date(record.datetime), record.reading]))
				this.drawchartsensor(sensordata, 1)
			}, (err) => {
				console.log(err)
			}).then(axios.post('http://192.168.1.88:4000/fetchsensor', {sensorid:2}, {crossdomain:true}).then((res) =>{
				var sensordata =[['Time', 'Reading']]

				res.data.records.forEach(record => sensordata.push([new Date(record.datetime), record.reading]))
				this.drawchartsensor(sensordata, 2)
			}, (err) => {
				console.log(err)
			}).then(axios.post('http://192.168.1.88:4000/fetchsensor', {sensorid:3}, {crossdomain:true}).then((res) =>{
				var sensordata =[['Time', 'Reading']]

				res.data.records.forEach(record => sensordata.push([new Date(record.datetime), record.reading]))
				this.drawchartsensor(sensordata, 3)
			}, (err) => {
				console.log(err)
			}).then(axios.post('http://192.168.1.88:4000/fetchsensor', {sensorid:4}, {crossdomain:true}).then((res) =>{
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
					min:10000
				}		
			}		
		}

		const linechart = new GoogleCharts.api.visualization.LineChart(document.getElementById('sensor' + sensorid + 'chart'))
	
		linechart.draw(data, options)

		}

	}
	drawpumpcharts(){

			axios.post('http://192.168.1.88:4000/fetchpump', {pumpid:1}, {crossdomain:true}).then((res) =>{
				var pumpdata =[['Time', 'ON/OFF']]

				res.data.records.forEach(record => pumpdata.push([new Date(record.datetime), record.value]))
				this.drawchartpump(pumpdata, 1)

				console.log(res.data.records)
			}, (err) => {
				console.log(err)
			}).then(axios.post('http://192.168.1.88:4000/fetchpump', {pumpid:2}, {crossdomain:true}).then((res) =>{
				var pumpdata =[['Time', 'ON/OFF']]

				res.data.records.forEach(record => pumpdata.push([new Date(record.datetime), record.value]))
				this.drawchartpump(pumpdata, 2)
			}, (err) => {
				console.log(err)
			}).then(axios.post('http://192.168.1.88:4000/fetchpump', {pumpid:3}, {crossdomain:true}).then((res) =>{
				var pumpdata =[['Time', 'ON/OFF']]

				res.data.records.forEach(record => pumpdata.push([new Date(record.datetime), record.value]))
				this.drawchartpump(pumpdata, 3)
			}, (err) => {
				console.log(err)
			}).then(axios.post('http://192.168.1.88:4000/fetchpump', {pumpid:4}, {crossdomain:true}).then((res) =>{
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
	render(){
	  return (
		<div>
			<Navbar bg="light">
				<Navbar.Brand>Home</Navbar.Brand>
			</Navbar>
			<br></br>
			<div className="pumprow">
				<div className="heading">Pump 1</div>
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
				<div className="heading">Pump 2</div>
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
				<div className="heading">Pump 3</div>
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
				<div className="heading">Pump 4</div>
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

export default App;
