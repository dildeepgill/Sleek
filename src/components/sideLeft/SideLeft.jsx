import ChatIcon from "@mui/icons-material/Chat";
import LogoutIcon from "@mui/icons-material/Logout";
import "./SideLeft.css";
import IconLeft from "../iconLeft/IconLeft";
import Known from "../known/Known";
import { Users } from "../../data";
import { Link } from "react-router-dom";
import { LightModeContext } from "../../context/lightModeContent";
import { useContext } from "react";

function SideLeft({ openMessenger, openPop }) {
  const { dispatch } = useContext(LightModeContext);
  return (
    <div className="sideLeft ">
      <div className="sideLeftContainer">
        <div className="IconLeftMsgbtn" onClick={openMessenger}>
          <IconLeft icon={<ChatIcon />} />
          <div>Messenger</div>
          <span onClick={() => dispatch({ type: "TOGGLE" })}></span>
        </div>

        <Link to="/enter">
          <div className="IconLeftMsgbtn">
            <IconLeft icon={<LogoutIcon />} style={{ cursor: "pointer" }} />
            <div>Logout</div>
          </div>
        </Link>

        <hr className="sideLeftHr" />

        <ul className="sideLeftKnown">
          <p className="sideLeftBf">Best Friends</p>
          {Users.map((name) => (
            <Known key={name.id} user={name} openPop={openPop} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SideLeft;
