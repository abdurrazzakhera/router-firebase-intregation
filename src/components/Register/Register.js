import React from "react";

const Register = () => {
  return (
    <div>
      <h2>Please Ragister</h2>
      <form>
        <input type='text' placeholder='Enter Your Name' />
        <br />
        <input type='email' placeholder='Enter Your email' />
        <br />
        <input type='password' placeholder='Enter your Password' />
        <br />
        <input type='submit' value='Sabmit' />
      </form>
    </div>
  );
};

export default Register;
