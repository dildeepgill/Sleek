import ChatIcon from "@mui/icons-material/Chat";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import LogoutIcon from "@mui/icons-material/Logout";
import "./SideLeft.css";
import IconLeft from "../iconLeft/IconLeft";
import Known from "../known/Known";
import { Users } from "../../data";
import NotificationsIcon from "@mui/icons-material/Notifications";
function SideLeft() {
  return (
    <div className="sideLeft">
      <div className="sideLeftContainer">
        <IconLeft icon={<ChatIcon />} text="Messenger" />
        <IconLeft icon={<LightbulbIcon />} text="Change Theme" />
        <IconLeft icon={<NotificationsIcon />} text="Notfications" />
        <IconLeft icon={<LogoutIcon />} text="Logout" />

        {/* <button className="sideLeftBtn">Post</button> */}
        <hr className="sideLeftHr" />

        <ul className="sideLeftKnown">
          <p className="sideLeftBf">Best Friends</p>
          {Users.map((name) => (
            <Known key={name.id} user={name} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SideLeft;
