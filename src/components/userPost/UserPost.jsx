import { IconButton } from "@mui/material";
import { Users } from "../../data";
import { ExpandMore, FavoriteBorder } from "@mui/icons-material";
import ChatIcon from "@mui/icons-material/Chat";
import "./UserPost.css";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import TimeAgo from "timeago-react";
import moment from "moment/moment";
function UserPost(props) {
  const shared = props.shared;
  const [commentMode, setCommentMode] = useState(false);
  const [readyToDelete, setReadyToDelete] = useState(false);
  const [liked, setLiked] = useState(false);
  const commentRef = useRef(null);
  const { currentUser } = useContext(AuthContext);
  //function to post comment here
  const postComment = (e) => {
    e.preventDefault();
    const userComment = commentRef.current.value;
    //some comment validation here
    if (userComment === "") {
      alert("please write something :)");
    } else {
      const commentObj = {
        name: currentUser.displayName,
        body: userComment,
        dateTime: moment().format("MMMM Do YYYY, h:mm:ss a"),
      };
      if (shared.comments === undefined) {
        //no current comments start with new comments array
        shared.comments = [commentObj];
      } else {
        //unshift into current comments
        shared.comments.unshift(commentObj);
      }
      props.updatePost(shared);
    }
  };

  const openDeleteMenu = (e) => {
    //code to enable delete menu, lets make a state for that too
    setReadyToDelete(!readyToDelete);
  };

  const enableCommentInterface = (e) => {
    //if commentMode is on then that comment div is visible where people will write their most virtuous thoughts
    setCommentMode(!commentMode);
  };

  const deleteThisPost = (e) => {
    e.preventDefault();
    props.deletePost(shared);
  };

  const likeOrUnlike = (e) => {
    //this function actually gives the post one more like or removes it if already liked.

    let currentLikes = parseInt(shared.like);
    if (liked) {
      currentLikes -= 1;
    } else {
      currentLikes += 1;
    }
    //if button is liked then remove one to unlike
    shared.like = currentLikes;
    props.updatePost(shared);
    setLiked(!liked);
  };

  return (
    <div className="userPost">
      <div className="userPostContainer">
        <div className="userPostUp">
          <div className="userPostOne">
            <img
              src={Users.filter((name) => name.id === shared.userId)[0].Picture}
              alt="userface"
              className="userPostImg"
            />

            <span className="userPostWho">
              {Users.filter((name) => name.id === shared.userId)[0].name}
            </span>
            <span className="userPostTime">
              {" "}
              {moment().format("MMMM Do YYYY, h:mm:ss a")}
            </span>
          </div>
          <div className="userPostTwo">
            <IconButton onClick={openDeleteMenu}>
              <ExpandMore className="userPostBtn" />
            </IconButton>
            {readyToDelete ? (
              <div className="delete" onClick={deleteThisPost}>
                Delete
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="userPostMiddle">
          <span className="userPostMiddleText">{shared.body}</span>
          {shared.photo !== "" ? (
            <img
              src={shared.photo}
              alt="randompicture"
              className="userPostMiddleImg"
            />
          ) : (
            <></>
          )}
        </div>
        <div className="userPostDown">
          <div className="userPostDownOne">
            <FavoriteBorder
              className={liked ? "userPostHeartLiked" : "userpostheart"}
              onClick={likeOrUnlike}
              style={{ cursor: "pointer" }}
            />

            <span className="userPostCounter">{shared.like}</span>
            <ChatIcon
              className="userPostHeart"
              onClick={enableCommentInterface}
            />
          </div>
          <div className="userPostDownTwo">
            <span
              className="userPostDownInput"
              onClick={enableCommentInterface}
              style={{ cursor: "pointer" }}
            >
              {shared.comments !== undefined ? shared.comments.length : 0}
              {` - comments`}
            </span>
          </div>
        </div>
      </div>
      {commentMode ? (
        <>
          <form className="commentBox" onSubmit={postComment}>
            <textarea
              type="text"
              placeholder="Write a comment ..."
              className="commentInput"
              rows={1}
              style={{ resize: "none" }}
              ref={commentRef}
            />
            <button type="submit" className="commentPost">
              Comment
            </button>
          </form>
          {/* below this form we have all the comments */}

          {shared.comments !== undefined ? (
            shared.comments.map((comment) => {
              return (
                <div className="commentWrapper">
                  <div className="commentInfo">
                    <span className="commentUsername">
                      @{comment.name.replace(/\s+/g, "").toLowerCase()}
                    </span>
                    <span className="commentBody"> {`${comment.body} `}</span>
                    <span className="commentTime">
                      {moment().format("MMMM Do YYYY, h:mm:ss a")}
                    </span>
                  </div>
                </div>
              );
            })
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default UserPost;
