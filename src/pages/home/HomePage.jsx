import { useState } from "react";
import Ads from "../../components/ads/Ads";
import Display from "../../components/display/Display";
import PopOut from "../../components/friendsPopOut/PopOut";
import Msg from "../../components/messenger/Msg";
import Nav from "../../components/nav/Nav";
import SideLeft from "../../components/sideLeft/SideLeft";
import "./HomePage.css";

function HomePage() {
  const [showMessenger, setShowMessenger] = useState(false);
  const [open, setOpen] = useState(false);
  const [whichFriend, setWhichFriennd] = useState(null);

  function openMessenger() {
    setShowMessenger(!showMessenger);
    setOpen(false);
  }

  function openPop(e) {
    setOpen(!open);
    setWhichFriennd(e.target);

    setShowMessenger(false);
  }
  function close() {
    setOpen(!open);
  }
  function closeMsg() {
    setShowMessenger(!showMessenger);
  }

  return (
    <>
      <div className="homePage">
        <Nav />
        <div className="container">
          <SideLeft openMessenger={openMessenger} openPop={openPop} />
          <Display />
          {showMessenger && <Msg closeMsg={closeMsg} />}
          {open && <PopOut whichFriend={whichFriend} close={close} />}
          <Ads />
        </div>
      </div>
    </>
  );
}

export default HomePage;
