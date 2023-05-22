import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from "react-router-dom";
import { LoginPage } from './pages/LoginPage/LoginPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { WordsPage } from './pages/WordsPage/WordsPage';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import React from 'react';

function App() {
  const navigate = useNavigate();
  const location = useLocation();;

  const isAuth = useSelector(state => state.user.isAuth)

  React.useEffect(() => {
    if(isAuth && location.pathname === '/login' || location.pathname === '/register'){
      navigate('/words')
    }else if(!isAuth) {
      navigate('/login')
    }
    
  }, [location.pathname, isAuth])



  return (
    <div className="App">
      <Header />
      <div className='app-wrapper'>

        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/Register' element={<RegisterPage />} />
          <Route path='/words' element={<WordsPage />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;
