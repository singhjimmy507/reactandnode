import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './firebase/firebase';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
				<a href="http://localhost:5000/signIn"> Sign In With Google</a>
			</div>
		);
	}
}

export default App;