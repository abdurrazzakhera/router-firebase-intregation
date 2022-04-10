import { getAuth } from "firebase/auth";
import React from "react";
// import useFirebase from "../../hooks/useFirebase";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import app from "../../firebase.init";

const auth = getAuth(app);

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <div>
      <h2>Please LOGIN</h2>
      <div>
        <button onClick={() => signInWithGoogle()} style={{ margin: "20px" }}>
          Sing in With Google
        </button>
      </div>
      <form>
        <input type='email' placeholder='Enter Your email' />
        <br />
        <input type='password' placeholder='Enter your Password' />
        <br />
        <input type='submit' value='Login' />
      </form>
    </div>
  );
};

export default Login;
