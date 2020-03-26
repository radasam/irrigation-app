import React from 'react';


class CameraPage extends React.Component{
	constructor(props) {
		super(props);
	}
	componentDidMount(){
			var ngrokaddr = 'https://19d7bd9d.ngrok.io'

			if(localStorage.ngrok){

				ngrokaddr = localStorage.ngrok
			}

			
			document.getElementById('imagebox').innerHTML = '<img src="' + ngrokaddr + '/latestpic">'
			
	}
	render(){
		return(
			<div id='imagebox'>
			</div>
		)
	}
}

export default CameraPage;
