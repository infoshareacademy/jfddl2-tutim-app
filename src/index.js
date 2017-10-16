import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'

import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
    <App title="My app"/>,
    document.getElementById('root')



)

registerServiceWorker()
