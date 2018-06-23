import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import SignIn from "../../container/SignIn/SignIn"

class App extends Component {
	render() {
		return (
			<Switch>
				<Route exact path='/' render={props => <SignIn {...props}/>}/>
			</Switch>
		)
	}
}

export default  App;