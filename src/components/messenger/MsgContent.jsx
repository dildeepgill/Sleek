import MsgAvatar from "./MsgAvatar";
import MsgChatItem from "./MsgChatItem";
import SendIcon from "@mui/icons-material/Send";
import "./MsgContent.css";
import { ChatItems } from "../../data";
import { createRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

function MsgContent({ closeMsg }) {
  const [input, setInput] = useState("");
  const messagesEndRef = createRef(null);
  function scrollToBottom() {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }
  // Function to display a form
  function displayForm(e) {
    e.preventDefault();
    // If the input is empty, show an alert asking the user to type something
    if (input === "") {
      alert("please type something :)");
    }
    // Create an object with properties "image", "key", and "msg"
    const currentInput = {
      image: "../assets/face1.jpg",
      key: 10,
      msg: input,
    };
    // Add the currentInput object to the "ChatItems" array
    ChatItems.push(currentInput);
    setInput("");
    scrollToBottom();
  }

  return (
    <div className="contentMainOne">
      <div className="contentMainHeader">
        <div className="contentMainOneL">
          <div className="contentMainUser">
            <MsgAvatar isOnline="active" image="../../assets/face1.jpg" />
            <p>Sunny Lehal</p>
          </div>
        </div>

        <div className="contentMainOneL">
          <div className="contentMainS">
            <button className="contentMainOneBtn" onClick={closeMsg}>
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>
      <div className="contentMainOneBody">
        <div className="contentMainOneBodyItems">
          {ChatItems.map((item, index) => {
            return (
              <MsgChatItem
                animationDelay={index + 2}
                key={item.key}
                user={item.type ? item.type : "me"}
                msg={item.msg}
                image={item.image}
              />
            );
          })}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <form onSubmit={displayForm}>
        <div className="contentMainOneBot">
          <div className="contentMainOneBotMsg">
            <input
              type="text"
              placeholder="Type your message here"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <button
              className="contentMainOneSending"
              id="contentMainOneSending"
            >
              <SendIcon />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default MsgContent;
