import React from 'react';

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Settings extends React.Component{
	constructor(props) {
		super(props);
		this.updateNgrok = this.updateNgrok.bind(this)
	}
	updateNgrok(){
		if(document.getElementById('ngroksecret').value == 'orange1234'){
			localStorage.ngrok = document.getElementById('ngrokovrd').value
		}
	}
	render(){
		return(
			<div className="settings">
				<Form>
					<Form.Group controlId="ngroksecret">
						<Form.Label>Ngrok Secret</Form.Label>
						<Form.Control type="text" />
					</Form.Group>
				</Form>			
				<Form>
					<Form.Group controlId="ngrokovrd">
						<Form.Label>Ngrok Override</Form.Label>
						<Form.Control type="text" />
					</Form.Group>
				</Form>
				<Button onClick={this.updateNgrok}>Save</Button>
			</div>
		)
	}
}

export default Settings;
