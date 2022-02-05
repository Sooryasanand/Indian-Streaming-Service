import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route,
} from "react-router-dom";

import HomeScreen from './Pages/Home/HomeScreen';
import SignupScreeen from './Pages/Login/Signup';
import ProfileScreen from './Pages/Profile/Profile';
import Movieinfo from './Pages/MovieInfo/Movieinfo';

import { auth } from './firebase/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/counter/userSlice';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth) {
        // Logged In
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      } else {
        // Logged Out
        dispatch(logout)
      }
    });

    return unsubscribe;
  }, [])

  return (
    <div className="app">
        <Router>
          {!user ? (
            <SignupScreeen />
          ) : (
            <Routes>
              <Route path="/profile" element={<ProfileScreen />}/>
              <Route path="/movieinfo" element={<Movieinfo name />} />
              <Route exact path="/" element={<HomeScreen />} />
            </Routes>
          )}
        </Router>
    </div>
  );
}

export default App;
