import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';

const render = () => {
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
};

render(App);