import React from 'react'
import ReactDOM from 'react-dom'
import './assets/fonts/ConcertOne.ttf'
import './index.css'
import App from './App.jsx'

import Amplify from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)

ReactDOM.render(<App />, document.getElementById('root'))