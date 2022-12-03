import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

import "./SignUp.css";
import { auth, db, storage } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const [img, setImg] = useState(null);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (img === null) {
      alert("please add an image");
    } else {
      const displayName = e.target[0].value;
      const email = e.target[1].value;
      const password = e.target[2].value;
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const storageRef = ref(storage, "usersImages/" + displayName);
      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.then(() => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          await updateProfile(res.user, {
            displayName,
            photoURL: downloadURL,
          });

          await setDoc(doc(db, "users", res.user.uid), {
            uid: res.user.uid,
            displayName,
            email,
            photoURL: downloadURL,
          });

          await setDoc(doc(db, "usersPosts", res.user.uid), { messages: [] });
        });
      });
      console.log(res.user);

      setError(true);

      navigate("/enter");
    }
  };

  return (
    <div className="SignUp">
      <div className="SignUpContainer">
        <div className="SignUpOne">
          <h1 className="SignUpTitle">Welcome To Sleek</h1>
        </div>
        <div className="SignUpTwo">
          <div className="SignUpUserInput">
            <div className="SignUpObj">
              <div>
                {" "}
                <img
                  src={
                    img ? URL.createObjectURL(img) : "/assets/placeholder.png"
                  }
                  alt="user pic"
                  className="SignUpImg"
                />
              </div>

              <div className="SignUpInput">
                <label htmlFor="file">
                  Upload:
                  <DriveFolderUploadOutlined className="SignUpIcon" />
                  <input
                    type="file"
                    name="file"
                    id="file"
                    accept=".png,.jpeg,.jpg"
                    style={{ display: "none" }}
                    onChange={(e) => setImg(e.target.files[0])}
                  />
                </label>
              </div>
            </div>
            <div className="SignUpTwo">
              <form onSubmit={handleRegister} className="SignUpFormBot">
                <input
                  type="text"
                  placeholder="Name"
                  id="displayName"
                  className="SignUpReg"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  className="SignUpReg"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  id="password"
                  className="SignUpReg"
                  minLength={5}
                  required
                />
                <button type="submit" className="SignUpRegBtn">
                  Sign Up
                </button>
                <Link to="/enter">
                  <button className="SignUpLogBtn">Log into Account</button>
                </Link>
                {error && <span>You got an error</span>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
