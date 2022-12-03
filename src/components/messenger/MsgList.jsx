import "./MsgList.css";
import SearchIcon from "@mui/icons-material/Search";
import MsgListItems from "./MsgListItems";
import { AllChatUsers } from "../../data";
function MsgList() {
  return (
    <div className="msgList">
      <div className="msgListHeading">
        <h3>Conversations</h3>
      </div>
      <div className="msgListChat">
        <div className="msgListContainer">
          <input
            className="msgListInput"
            type="text"
            placeholder="Search"
            required
          />
          <button className="msgListBtn">
            <SearchIcon />
          </button>
        </div>
      </div>
      <div className="msgListItems">
        {AllChatUsers.map((item, index) => {
          return (
            <MsgListItems
              name={item.name}
              key={item.id}
              animationDelay={index + 1}
              active={item.active ? "active" : ""}
              isOnline={item.isOnline ? "active" : ""}
              image={item.image}
              time={item.Time}
              // item={item}
              // key={item.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MsgList;
