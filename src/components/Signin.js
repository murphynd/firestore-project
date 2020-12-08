import React from "react";
import firebase from "firebase/app";
// import { signInWithGoogle } from "../firebase";

function Signin() {
  function doSignUp(event) {
    event.preventDefault(event);
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function () {
        console.log("successfully signed up!");
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }
  let provider = new firebase.auth.GoogleAuthProvider();

  function googleSignin(event) {
    event.preventDefault(event);
    firebase
      .auth()
      .signInWithRedirect(provider)
      .then(function (result) {
        let token = result.credential.accessToken;
        let user = result.user;

        console.log(token);
        console.log(user);
      })
      .catch(function (error) {
        let errorCode = error.code;
        let errorMessage = error.message;

        console.log(errorCode);
        console.log(errorMessage);
      });
  }

  function googleSignout() {
    firebase
      .auth()
      .signOut()

      .then(
        function () {
          console.log("Signout Successful");
        },
        function (error) {
          console.log("Signout Failed");
        }
      );
  }

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function () {
        console.log("Successfully signed in!");
      })
      .catch(function (error) {});
  }

  function doSignOut() {
    firebase
      .auth()
      .signOut()
      .then(function () {
        console.log("Successfully signed out!");
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }
  return (
    <React.Fragment>
      <h1>Sign up</h1>
      <form onSubmit={doSignUp}>
        <input type="text" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Sign up</button>
      </form>
      <h1>Sign In</h1>
      <form onSubmit={doSignIn}>
        <input type="text" name="signinEmail" placeholder="email" />
        <input type="password" name="signinPassword" placeholder="Password" />
        <button type="submit">Sign in</button>
      </form>
      <h1>Sign Out</h1>
      <button onClick={doSignOut}>Sign out</button>
      <h1>Sign in with Google</h1>
      <button onClick={googleSignin} className="btn btn-outline-dark btn-lg">
        GOOGLE SIGN IN
      </button>
      <button onClick={googleSignout} className="btn btn-outline-dark btn-lg">
        GOOGLE SIGN OUT
      </button>
    </React.Fragment>
  );
}

export default Signin;
