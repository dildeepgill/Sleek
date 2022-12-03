import "./Msg.css";
import MsgBody from "./MsgBody";

function Messenger({ closeMsg }) {
  return (
    <div className="messenger">
      <MsgBody closeMsg={closeMsg} />
    </div>
  );
}

export default Messenger;
