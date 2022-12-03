import "./MsgBody.css";
import MsgContent from "./MsgContent";
import MsgList from "./MsgList";
function MsgBody({ closeMsg }) {
  return (
    <div className="MsgBody">
      <MsgList />
      <MsgContent closeMsg={closeMsg} />
    </div>
  );
}

export default MsgBody;
