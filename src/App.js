import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from "react-router-dom";
import { LoginPage } from './pages/LoginPage/LoginPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { WordsPage } from './pages/WordsPage/WordsPage';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { fetchAuthMe } from './Redux/Slices/user-slice'; 
import React from 'react';

function App() {
  const dispacth = useDispatch()

  React.useEffect(() => {
    dispacth(fetchAuthMe())
  }, [])


  const navigate = useNavigate();
  const location = useLocation();;

  const isAuth = useSelector(state => state.user.isAuth)


  if(isAuth) {
    if(location.pathname === '/login' || location.pathname === '/register') {
      navigate('/words')
    }
  }




  return (
    <div className="App">
      <Header />
      <div className='app-wrapper'>


        {
          isAuth ?

            <Routes>
              <Route path='/words' element={<WordsPage />} />
            </Routes> 
            :
            <Routes>
              <Route path='/login' element={<LoginPage />} />
              <Route path='/register' element={<RegisterPage />} />
              <Route path='/' element={<div>MainPage</div>}/>
            </Routes>
        }



      </div>
    </div>
  );
}

export default App;
