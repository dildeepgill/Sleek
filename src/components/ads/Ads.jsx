import React, { useContext, useState } from "react";

import "./Ads.css";

import { AuthContext } from "../../context/AuthContext";
import EditProfile from "./EditProfile";

const Ads = () => {
  const { currentUser } = useContext(AuthContext);
  const [modal, setModal] = useState(false);
  console.log(currentUser["country"], "CHECL THIOSSSSSSSS");

  function modalOpens() {
    setModal(!modal);
  }
  console.log(currentUser, "current");

  return (
    <div className="ads">
      <div className="adsAboutme">
        <div className="aboutMeContainer">
          <div className="aboutMeOne">
            <div className="aboutMeAbove">
              <div className="aboutMeInfo"></div>
              <div className="aboutMeCover">
                <img
                  src="/assets/profileCover/profilecover.jpg"
                  alt=""
                  className="aboutMeCoverImg"
                />
                <img
                  src={currentUser.photoURL}
                  alt=""
                  className="aboutMeCoverProfile"
                />
              </div>
            </div>
            <div className="aboutMeAllInfo">
              <h4 className="aboutMeInfoName">{currentUser.displayName}</h4>
              <div className="aboutMeInfoemail">{currentUser.email}</div>
              <div className="aboutMeInfoemail">{currentUser.country}</div>
            </div>

            <div className="aboutMeCoverBotttom"></div>
            <div className="adsEditProfile" onClick={modalOpens}>
              Edit Profile
            </div>
            {modal && <EditProfile />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ads;
