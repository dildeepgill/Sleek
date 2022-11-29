import "./Nav.css";
import SearchIcon from "@mui/icons-material/Search";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
function Nav() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser.photoURL, "IMGGGG");
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
      </div>
    </div>
  );
}

export default Nav;
