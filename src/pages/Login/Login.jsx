import React, { useState } from "react";
import "./Login.css";
import { login, signup } from "../../firebase";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Login = () => {
  const [signState, setSignState] = useState("Sign In");

  // for form submission
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // loading
  const [loading, setLoading] = useState(false);

  const user_auth = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (signState === "Sign In") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
    setLoading(false);
  };

  return loading ? (
    <div className="loading-spinner">
      <AiOutlineLoading3Quarters className="loading" />
    </div>
  ) : (
    <div className="login">
      <h2>NETFLIX</h2>

      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" ? (
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Your Name"
            />
          ) : (
            <></>
          )}

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button onClick={user_auth} type="submit">
            {signState}
          </button>
          <div className="form-help">
            <div className="remeber">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ? (
            <p>
              {" "}
              New to Netflix?{" "}
              <span onClick={() => setSignState("Sign Up")}>Sign Up Now</span>
            </p>
          ) : (
            <p>
              {" "}
              Already have an account?{" "}
              <span onClick={() => setSignState("Sign In")}>Sign In Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;

// search tmdb movie database
// click on join tmdb at top right corner
// fil the forms for email and password and hit enter
// or alredy have an account click login
// at the home page click on more select API
// click developer
// search for api reference
// scroll down to now playing
// click on the three dot at the right to select javascript
// click on try and see the response beneath
// after working on the fetch and collecting the datas
// open tmdb image url site
// click on the first basis website
// copy from http and stop at 500/

// NB:at the home page if u didnt see developer api use this link
// https://developer.themoviedb.org/
// from the api list that displays now playing, popular, top rated etc
// the url api is the same just the above is what should change for each
// movie
// at the now playing api data copy the id to get the movie video
// locate the movies click on it you will see movie_id paste the id
// click on try it again to get the full details of that particulat movie
// you will get the movie type, key, id, published_at
// copy the fetch code and use at the player.jsx

// ........TO INTEGRATE FIREBASS FOR LOGIN/LOGOUT...............
// 1. visit www.firebase.google.com(https://console.firebase.google.com/)
// click on get started, it automatically signs you in
// click on create firebase project
// enter project name click contine
// turn off enable gemini in firebase
// click on create project
// at the left bar click on the build select authentication and
// click get started
// click email/password and enable password click on save
// at the left click firestore database and click create database
// select nearest location and click next
// click start in text mode and click create
// at the top click project overview
// click on the web option and provide a nickname for the project
// and click register app
// copy the npm and run at the terminal: npm install firebase react-firebase-hooks
// at the src folder create a file called firebase.js
// and copy the code at firebase into the file.js
// once you sign in click continue to consolde
// at the left bar click authentication

// ....for message notification(React-Toaster)....
// 1. visit react-toastift click the first site
// 2. install: npm i react-toastify at terminal
// 3. copy the import statement code and use at the app.jsx
