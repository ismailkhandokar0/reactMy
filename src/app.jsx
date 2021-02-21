import React from 'react';
import './components'
import App from './components';
import  './components/css/profile.css';
import './components/css/templatemo-style.css'
import './components/js/our'
import $ from "jquery";

import{HashRouter as Router} from 'react-router-dom'


ReactDOM.render(
    <Router>
        <App/>
    </Router>
    ,document.getElementById('root')
)


