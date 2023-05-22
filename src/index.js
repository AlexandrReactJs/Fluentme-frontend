import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from './Redux/store';
import { Provider } from 'react-redux'
import AdminPage from './pages/AdminPage/AdminPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path='/*' element={<App />}/>
          <Route path='/admin/*' element={<AdminPage/>}/>
        </Routes>
      </Provider>
    </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();