import { Close, EmojiEmotions, PermMedia } from "@mui/icons-material";
import ShareIcon from "@mui/icons-material/Share";
import GifBoxIcon from "@mui/icons-material/GifBox";
import "./AddSomething.css";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Picker from "@emoji-mart/react";

function AddSomething(props) {
  const { currentUser } = useContext(AuthContext);
  const [img, setImg] = useState(null);
  const [input, setInput] = useState("");
  const [showEmojis, setShowEmojis] = useState(false);

  console.log(currentUser.photoURL, "PHOTOTO");
  //we just need to read whatever is in the input field.
  const inputRef = useRef(null);
  const sharedImgRef = useRef(null);
  //posts is going to be an object, no matter where it is initialised, its probably going to be placed in a parent component
  //post={content:"hello",datetime:,likes:,dislikes}

  //this function submits whatever the user posts
  const submitPost = (e) => {
    e.preventDefault();
    const postContent = inputRef.current.value;
    let photoSrc = "";
    //logic to get photo
    if (sharedImgRef.current != null) {
      photoSrc = sharedImgRef.current.src;
    }
    //when we submit here there should be a default post object which is put inside the array posts
    if (postContent === "" && photoSrc === "") {
      alert("please write something :) ");
    } else {
      const currentPost = {
        displayName: currentUser.displayName,
        body: postContent,
        comment: "helo",
        date: "27-11-2022",
        id: 1,
        like: 0,
        photo: photoSrc,
        title: "i love soccer",
        userId: 2,
      };

      props.addToPosts(currentPost);
      //so now that this posts array has been made we will just make sure that the post is visible.
    }
    setInput("");
    setImg(null);
    setShowEmojis(false);
  };
  const removeImage = () => {
    setImg(null);
  };

  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setInput(input + emoji);
  };

  return (
    <form className="addSomething" method="POST" onSubmit={submitPost}>
      <div className="addSomethingContainer">
        <div className="addSomethingUp">
          <img
            src={currentUser.photoURL}
            alt="personFace"
            className="addSomethingImg"
          />
          <input
            type="text"
            placeholder={`What's poppin ${currentUser.displayName}?`}
            className="addSomethingInput"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            ref={inputRef}
          />
        </div>
        <hr className="addSomethingHr" />
        {img && (
          <div className="shareImgContainer">
            <img
              src={URL.createObjectURL(img)}
              alt=""
              className="shareImg"
              ref={sharedImgRef}
            />
            <Close className="shareCancelImg" onClick={removeImage} />
          </div>
        )}
        <div className="addSomethingBottom">
          <div className="addSomethingEmojiDiv">
            <div className="addSomethingChoices">
              <label htmlFor="file" className="addSomethingChoice">
                <PermMedia
                  className="addSomethingIcon addSomething2"
                  style={{ cursor: "pointer" }}
                />
                <span className="addSomethingText"></span>
                <input
                  type="file"
                  id="file"
                  accept=".png,.jpeg,.jpg"
                  style={{ display: "none" }}
                  onChange={(e) => setImg(e.target.files[0])}
                />
              </label>
              <div
                onClick={() => setShowEmojis(!showEmojis)}
                className="addSomethingChoice"
              >
                <EmojiEmotions
                  className="addSomethingIcon addSomething3"
                  style={{ cursor: "pointer" }}
                />
                <span className="addSomethingText"></span>
              </div>
              <div className="addSomethingChoice">
                <ShareIcon className="addSomethingIcon addSomething3" />
                <span className="addSomethingText"></span>
              </div>
              <div className="addSomethingChoice">
                <GifBoxIcon className="addSomethingIcon addSomething3" />
                <span className="addSomethingText"></span>
              </div>
            </div>

            {showEmojis && (
              <div className="addSomethingEmoji">
                <Picker onEmojiSelect={addEmoji} />
              </div>
            )}
          </div>
          <div className="addSomethingButtonContainer">
            <button className="addSomethingButton">Post</button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default AddSomething;
