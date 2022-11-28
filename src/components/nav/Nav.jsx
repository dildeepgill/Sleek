import "./Nav.css";
import SearchIcon from "@mui/icons-material/Search";
function Nav() {
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

        <img src="/assets/face1.jpg" alt="person face" className="navImg" />
      </div>
    </div>
  );
}

export default Nav;
