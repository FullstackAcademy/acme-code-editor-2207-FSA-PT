import React, { useEffect } from 'react';
import Home from './Home';
import Login from './Login';
import Profile from './Profile';
import { useSelector, useDispatch } from 'react-redux';
import { loginWithToken } from '../store';
import { Link, Routes, Route } from 'react-router-dom';


const App = ()=> {
  const { auth } = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(loginWithToken());
  }, []);

  return (
    <div>
      <h1>FS App Template</h1>
      {
        !!auth.id  && (
          <div>
            <nav>
              <Link to='/'>Home</Link>
              <Link to='/profile'>Profile</Link>
            </nav>
          </div>
        )
      }
      {
        auth.id ? (
          <Routes>
            <Route path='/' element={ <Home />} />
            <Route path='/profile' element={ <Profile />} />
          </Routes>
        ) : <Login />
      }
    </div>
  );
};

export default App;
