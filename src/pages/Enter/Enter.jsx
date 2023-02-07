import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import "./Enter.css";
import { Link, useNavigate } from "react-router-dom";
function Enter() {
  const [error, setError] = useState(false);
  // hook to allow navigation within the app
  const navigate = useNavigate();

  // handleLogin is an async function that is called when the form is submitted

  const handleLogin = async (e) => {
    e.preventDefault();
    // get the email and password values from the form
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      // call the signInWithEmailAndPassword function to log in
      await signInWithEmailAndPassword(auth, email, password);
      // navigate to the "/home" route
      navigate("/home");
    } catch (error) {
      // if an error occurs, set the error state to true
      setError(true);
    }
  };

  return (
    <div className="enter">
      <div className="enterContainer">
        <div className="enterOne">
          <h1 className="enterTitle">Welcome To Sleek</h1>
        </div>
        <div className="enterTwo">
          <div className="enterUserInput">
            <div className="enterBot">
              <form onSubmit={handleLogin} className="enterUserBot">
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  className="enterInput"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  id="password"
                  className="enterInput"
                  minLength={5}
                  required
                />

                <button type="submit" className="enterBtn">
                  Sign In
                </button>

                <Link to="/">
                  <button className="enterLogBtn">Create a New Account</button>
                </Link>
                {error && <span>Wrong email or password</span>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Enter;
