import React from 'react';

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class PasswordModal extends React.Component{
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	handleSubmit(){
		this.props.submit(document.getElementById('postpass_m').value)
		this.props.toggleModal()
	}
	render(){
		return(
			<Modal show={this.props.show} onHide={this.props.toggleModal}>
				<Modal.Header closeButton>
					<Modal.Title>Post Password</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group controlId="postpass_m">
							<Form.Label>Post Password</Form.Label>
							<Form.Control type="text" />
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.handleSubmit}>Submit</Button>
				</Modal.Footer>
			</Modal>
		)
	}
}

export default PasswordModal;
