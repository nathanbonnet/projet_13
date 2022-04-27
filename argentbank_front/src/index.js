import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';
import Footer from './components/Footer'
import Header from './components/Header'
import './styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header/>
      <App />
      <Footer />
    </Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);