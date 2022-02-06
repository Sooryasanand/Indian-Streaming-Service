import React, { useState, useEffect } from "react";
import "./Profile.css";
import Nav from '../../components/Nav';
import { useSelector } from "react-redux";
import { selectUser } from "../../features/counter/userSlice";
import db from "../../firebase/firebase";
import { auth } from '../../firebase/firebase';
import PlanScreen from '../Plan/Plans';

function Profile() {
  const user = useSelector(selectUser);
  const [subscriptions, setSubscription] = useState(null);

  useEffect(() => {
    db.collection("customers")
      .doc(user.uid)
      .collection("subscriptions")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach(async (subscription) => {
          setSubscription({
            role: subscription.data().role,
            current_period_end: subscription.data().current_period_end.seconds,
            current_period_start:
              subscription.data().current_period_start.seconds,
          });
        });
      });
  }, [user.uid]);

  return (
    <div className="profileScreen"> 
      {subscriptions && <Nav />}
      <div className="profileScreen_body">
        <h1>My Profile</h1>
        <div className="profileScreen_info">
          <img src="https://streamflexmisc.s3.ap-south-1.amazonaws.com/profilePic/profilePicBlue.png" />
          <div className="profileScreen_details">
            <h2>Email: {user.email}</h2>
            <div className="profileScreen_plans">
              <h3>Your Current Plan</h3>
              <PlanScreen/>
              <button onClick={() => auth.signOut()} className="profileScreen_signOut">Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
