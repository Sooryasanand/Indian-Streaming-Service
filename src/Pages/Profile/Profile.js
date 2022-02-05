import React from "react";
import "./Profile.css";
import Nav from '../../components/Nav';
import { useSelector } from "react-redux";
import { selectUser } from '../../features/counter/userSlice';
import { auth } from '../../firebase/firebase';

function Profile() {
  const user = useSelector(selectUser)

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen_body">
        <h1>My Profile</h1>
        <div className="profileScreen_info">
          <img src="https://streamflexmisc.s3.ap-south-1.amazonaws.com/profilePic/profilePicBlue.png" />
          <div className="profileScreen_details">
            <h2>Email: {user.email}</h2>
            <div className="profileScreen_plans">
              <h3>Your Current Plan</h3>
              <button onClick={() => auth.signOut()} className="profileScreen_signOut">Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
