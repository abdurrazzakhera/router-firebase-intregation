import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import "./Header.css";

const Header = () => {
  const { user, handelSingOut } = useFirebase();
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/products'>Products</Link>
        <Link to='/orders'>Orders</Link>
        <Link to='/register'>Register</Link>
        <span>{user?.displayName && user.displayName}</span>
        <img
          src={user?.photoURL && user.photoURL}
          alt=''
          style={{ width: "40px", borderRadius: "50%", marginTop: "15px" }}
        />
        {user?.uid ? (
          <button onClick={handelSingOut}>Sing Out</button>
        ) : (
          <Link to='/login'>Login</Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
