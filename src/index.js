import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'normalize.css';
import './assets/styles/style.scss'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
