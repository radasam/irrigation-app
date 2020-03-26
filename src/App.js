import React from 'react';
import ReactDom from 'react-dom';
import './App.css';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import MainPage from './MainPage'
import Settings from './Settings'
import CameraPage from './Camera'

class App extends React.Component{
	constructor(props) {
		super(props);
	}
	gotoMainPage(){
		ReactDom.render(<MainPage></MainPage>, document.getElementById('mainbody'))
	}
	gotoSettings(){
		ReactDom.render(<Settings></Settings>, document.getElementById('mainbody'))
	}
	gotoCamera(){
		ReactDom.render(<CameraPage></CameraPage>, document.getElementById('mainbody'))
	}
	render(){
	  return (
		<div>
			<Navbar bg="light">
				<Navbar.Brand onClick={this.gotoMainPage}>Home</Navbar.Brand>
				<Nav className="mr-auto">
				  <Nav.Link onClick={this.gotoSettings}>Settings</Nav.Link>
				  <Nav.Link onClick={this.gotoCamera}>Camera</Nav.Link>
				</Nav>
			</Navbar>
			<br></br>
			<div id="mainbody"></div>
		</div>
	  );
	}
}

export default App;
