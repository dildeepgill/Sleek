import MsgAvatar from "./MsgAvatar";
import "./MsgListItems.css";
function MsgListItems(props) {
  function selectChat(e) {
    for (
      let index = 0;
      index < e.currentTarget.parentNode.children.length;
      index++
    ) {
      e.currentTarget.parentNode.children[index].classList.remove("active");
    }
    e.currentTarget.classList.add("active");
  }

  return (
    <div
      style={{ animationDelay: `0.${props.animationDelay}s` }}
      onClick={selectChat}
      className={`MsgListItemsTwo ${props.active ? props.active : ""} `}
    >
      <MsgAvatar image={props.image} isOnline={props.isOnline} />
      <div className="userMeta">
        <p>{props.name}</p>
        <span className="activeTime">{props.time}</span>
      </div>
    </div>
  );
}
export default MsgListItems;
