import React from "react";
import useFirebase from "../../hooks/useFirebase";

const Login = () => {
  const { singInWithGoogle } = useFirebase();
  return (
    <div>
      <h2>Please LOGIN</h2>
      <div>
        <button onClick={singInWithGoogle} style={{ margin: "20px" }}>
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
