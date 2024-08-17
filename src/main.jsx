import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CursorFollower from './components/cursor/CursorFollower.jsx';
// import ScrollAnimationComponent from './ScrollAnimationComponent';
import { Provider } from 'react-redux';
import { store } from './store';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <CursorFollower />
    {/* <ScrollAnimationComponent/> */}
  </React.StrictMode>,
)

