import "./MsgAvatar.css";
function MsgAvatar(props) {
  return (
    <div className="avatar">
      <div className="avatar-img">
        <img src={props.image} alt="avatarImg" />
      </div>
      <span className={`isOnline ${props.isOnline}`}></span>
    </div>
  );
}

export default MsgAvatar;
