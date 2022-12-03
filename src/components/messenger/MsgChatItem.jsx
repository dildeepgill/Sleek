import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import MsgAvatar from "./MsgAvatar";

function MsgChatItem(props) {
  const { currentUser } = useContext(AuthContext);
  return (
    <div
      style={{ animationDelay: `0.8s` }}
      className={`msgChatItem ${props.user ? props.user : ""}`}
    >
      <div className="msgChatMain">
        <div className="msgChatMs">{props.msg}</div>
        <div className="msgChatAbout">
          <span>15 mins ago</span>
          <span>Seen 1.08PM</span>
        </div>
      </div>
      <MsgAvatar
        isOnline="active"
        image={
          props.user === "other"
            ? "../../assets/face1.jpg"
            : currentUser.photoURL
        }
      />
    </div>
  );
}

export default MsgChatItem;
