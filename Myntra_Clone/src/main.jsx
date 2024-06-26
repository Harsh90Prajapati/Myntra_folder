import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App'
import './index.css'
import { Provider } from "react-redux"
import myntraStore from './store'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={myntraStore}>
    <App/>
    </Provider>
  </React.StrictMode>,
)
