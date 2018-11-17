// Contain all of the boot up logic for the React and Redux side of the application
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// Takes two arguments - takes root component, and second where were trying to render it inside the DOM
ReactDOM.render(<App />, document.getElementById('root'));