import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import settings from './images/icons/setting.svg';

ReactDOM.render(
  <React.StrictMode>
    <div className='development'>
      <img className='development__icon' src={settings} alt='' />
      <h1 className='development__title'>Hello, I'm Anna!</h1>
      <p className='development__intro'>And I am a front-end developer. <br />
        My passion is to create websites from start to finish.
      </p>
      <i> Thank you for visiting my website, unfortunately it is still under development. Please open it on a wider device.</i>
    </div>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
