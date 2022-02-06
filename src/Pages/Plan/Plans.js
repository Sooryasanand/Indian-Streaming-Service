import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/counter/userSlice";
import db from "../../firebase/firebase";
import firebase from "../../firebase/firebase";
import "./Plans.css";
import { loadStripe } from "@stripe/stripe-js";

function Plans() {
  const [products, setProductes] = useState([]);
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

  useEffect(() => {
    db.collection("products")
      .where("active", "==", true)
      .get()
      .then((querySnapshot) => {
        const products = {};
        querySnapshot.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data();
          const priceSnap = await productDoc.ref.collection("prices").get();
          priceSnap.docs.forEach((price) => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data(),
            };
          });
        });
        setProductes(products);
      });
  });

  console.log(products);
  console.log(subscriptions);

  const loadCheckout = async (priceId) => {
    const docRef = await db
      .collection("customers")
      .doc(user.uid)
      .collection("checkout_sessions")
      .add({
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      });

    docRef.onSnapshot(async (snap) => {
      const { error, sessionId } = snap.data();

      if (error) {
        alert(`An error occured: ${error.message}`);
      }

      if (sessionId) {
        const stripe = await loadStripe(
          "pk_test_51KPzl9COLsHo56ok52RIwLVtMgIlBqSXepSszKNbMtq5JujgUevHhQNS4gQG7BUw4wAUYkaPOIIPJ5hVXQaYQhl000d860hl9Z"
        );
        stripe.redirectToCheckout({ sessionId });
      }
    });
  };

  return (
    <div className="planScreen">
        <br />
      {subscriptions && <p>Renewal Date: {new Date(subscriptions?.current_period_end * 1000).toLocaleDateString()}</p>}
      {Object.entries(products).map(([productId, productData]) => {
        // Logic to check users subscriptions
        const isCurrentPackage = productData.name
          ?.toLowerCase()
          .includes(subscriptions?.role);

        return (
          <div
            key={productId}
            className={`${
              isCurrentPackage && "planScreen_plan-disabled"
            } planScreen_plan`}
          >
            <div className="planScreen_info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>
            <button
              style={{ cursor: "pointer" }}
              onClick={() =>
                !isCurrentPackage && loadCheckout(productData.prices.priceId)
              }
            >
              {isCurrentPackage ? "Current Subscription" : "Subscribe"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Plans;
