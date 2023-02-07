import MsgAvatar from "./MsgAvatar";
import "./MsgListItems.css";
function MsgListItems(props) {
  // function to select a chat and highlight it as active

  function selectChat(e) {
    // loop through all the children of the parent node of the clicked element
    for (
      let index = 0;
      index < e.currentTarget.parentNode.children.length;
      index++
    ) {
      // remove the active class from all the children
      e.currentTarget.parentNode.children[index].classList.remove("active");
    }
    // add the active class to the clicked element
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
