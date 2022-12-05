import "./Nav.css";
import SearchIcon from "@mui/icons-material/Search";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import ChatIcon from "@mui/icons-material/Chat";

function Nav({ openMessenger }) {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="nav">
      <div className="navOne">
        <span className="navLogo">SLEEK</span>
      </div>
      <div className="navTwo">
        <div className="navSearch">
          <SearchIcon className="navSearchIcon" />
          <input type="text" placeholder="friends post" className="navInput" />
        </div>
      </div>
      <div className="navIcons">
        <div className="navLinks">
          <span className="navLink">Home</span>
        </div>
        <img src={currentUser.photoURL} alt="person face" className="navImg" />
        <ChatIcon
          className="navMsg"
          onClick={openMessenger}
          // style={{ display: "none" }}
        />
        <Link to="/enter">
          <LogoutIcon
            style={{ cursor: "pointer" }}
            text="Logout"
            className="navIconsLogout"
          />
        </Link>
      </div>
    </div>
  );
}

export default Nav;
