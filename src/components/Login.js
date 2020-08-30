import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";

const Login = () => {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="login">
      <div className="login__top">
        <img
          src="https://cdn.freebiesupply.com/logos/large/2x/facebook-logo-2019.png"
          //   width="200"
          //   height="200"
          alt="fb"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREoW4yDx4gnD6oIBVEK230BqF7Oig0yR6XDw&usqp=CAU"
          alt="facebook"
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
};

export default Login;
