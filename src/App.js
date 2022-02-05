import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route,
} from "react-router-dom";

import HomeScreen from './Pages/Home/HomeScreen';
import SignupScreeen from './Pages/Login/Signup';
import ProfileScreen from './Pages/Profile/Profile';
import MovieinfoScreen from './Pages/MovieInfo/Movieinfo';
import PlayerScreen from './Pages/Player/Player';

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
        dispatch(logout())
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
              <Route exact path="/" element={<HomeScreen />} />
              <Route path="/movieinfo" element={<MovieinfoScreen name />} />
              <Route path="/player" element={<PlayerScreen />} />
              <Route path="/profile" element={<ProfileScreen />}/>
            </Routes>
          )}
        </Router>
    </div>
  );
}

export default App;
