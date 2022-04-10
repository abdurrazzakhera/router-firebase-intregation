import { getAuth } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../firebase.init";

const auth = getAuth(app);

const Home = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <h2>This is Home Page</h2>
      <img
        src={user?.photoURL && user.photoURL}
        alt=''
        style={{ width: "50px", borderRadius: "50%" }}
      />
      <h3>Current User : {user ? user.displayName : "Nobody Here"}</h3>
    </div>
  );
};

export default Home;
