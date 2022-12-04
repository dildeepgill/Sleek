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
        <IconLeft
          icon={<ChatIcon onClick={openMessenger} />}
          text="Messenger"
        />
        <span onClick={() => dispatch({ type: "TOGGLE" })}>
          {/* <IconLeft icon={<LightbulbIcon />} text="Change Theme" /> */}
        </span>
        {/* <IconLeft icon={<NotificationsIcon />} text="Notfications" /> */}

        <Link to="/enter">
          <IconLeft
            icon={<LogoutIcon />}
            style={{ cursor: "pointer" }}
            text="Logout"
          />
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
