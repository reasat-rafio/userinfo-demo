import React from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../Firebase.config";
import { useState, useEffect } from "react";
import { createContext } from "react";
import { useContext } from "react";
import { Route, Redirect, Router } from "react-router-dom";

firebase.initializeApp(firebaseConfig);

const Context = createContext();

export const AuthContextProvider = ({ children }) => {
  const auth = Auth();
  return <Context.Provider value={auth}>{children}</Context.Provider>;
};

export const useAuth = () => useContext(Context);

export const PrivateRoute = ({ children, ...rest }) => {
  const auth = useAuth();
  console.log(rest);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

const getUser = (user) => {
  const { displayName, email, photoURL } = user;
  return { name: displayName, email, photo: photoURL };
};

const Auth = () => {
  const [user, setUser] = useState(null);

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    return firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        const currentUser = getUser(res.user);
        setUser(currentUser);
        console.log(user);
        return res.user;
      })
      .catch((err) => {
        console.log(err.message);
        return err.message;
      });
  };

  const signOutWithGoogle = () => {
    return firebase
      .auth()
      .signOut()
      .then((res) => {
        console.log(user);
        setUser(null);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (usr) {
      if (usr) {
        const currUser = getUser(usr);
        setUser(currUser);
      } else {
        // No user is signed in.
      }
    });
  }, []);

  return {
    user,
    signInWithGoogle,
    signOutWithGoogle,
  };
};

export default Auth;
