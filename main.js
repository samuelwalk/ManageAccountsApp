import ReactDOM from 'react-dom';
import React from 'react';
import App from './src/components/App';

const render = () => {
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
};

render(render);