import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import mainStyle from  './index.css';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from "./container/App/App";
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from '../src/store-index';

ReactDOM.render(
	<section className="parentContainer">
		<MuiThemeProvider>
	<BrowserRouter>
		<App/>
	</BrowserRouter>
		</MuiThemeProvider>
	</section>
	, document.getElementById('root'));
registerServiceWorker();
