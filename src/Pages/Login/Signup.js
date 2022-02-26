import React, { useRef } from "react";
import { auth } from "../../firebase/firebase";
import { Link, useNavigate } from 'react-router-dom';
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser)
      navigate('./profile')
    }).catch(error => {
      alert(error.message)
    })
  }

  const signIn = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser)
    }).catch(error => alert(error.message))
  }

  return (
    <div className="signupScreeen">
      <form>
        <h1 className="headText">Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit" onClick={signIn}>Sign In</button>
        <h4>
          <span className="signupScreen_grey">New here? </span>
          <span className="signupScreen_link" onClick={register}>Sign Up to Stream Flex.</span></h4>
          <h5 onClick={() => navigate('forgotpassword')}>Forgot Password?</h5>
      </form>
    </div>
  );
}

export default Signup;
