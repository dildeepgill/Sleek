import { IconButton } from "@mui/material";
import { Users } from "../../data";
import { ExpandMore, FavoriteBorder } from "@mui/icons-material";
import ChatIcon from "@mui/icons-material/Chat";
import "./UserPost.css";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import moment from "moment/moment";
function UserPost(props) {
  const shared = props.shared;
  const [commentMode, setCommentMode] = useState(false);
  const [readyToDelete, setReadyToDelete] = useState(false);
  const [liked, setLiked] = useState(false);
  const commentRef = useRef(null);
  const { currentUser } = useContext(AuthContext);

  // function to post a comment
  const postComment = (e) => {
    e.preventDefault();
    // getting the value of the comment from the DOM element referenced by commentRef

    const userComment = commentRef.current.value;

    // if user comment is an empty string, show an alert
    if (userComment === "") {
      alert("please write something :)");
    } else {
      // creating an object for the new comment
      const commentObj = {
        name: currentUser.displayName,
        body: userComment,
        dateTime: moment().format("MMMM Do YYYY, h:mm:ss a"),
      };
      // if comments is undefined, initialize comments as an array with the new comment
      if (shared.comments === undefined) {
        shared.comments = [commentObj];
      } else {
        // otherwise, add the new comment to the start of the comments array

        shared.comments.unshift(commentObj);
      }
      // call the updatePost function from props to update the post
      props.updatePost(shared);
    }
  };
  // function to toggle the readyToDelete state
  const openDeleteMenu = (e) => {
    setReadyToDelete(!readyToDelete);
  };
  // function to toggle the commentMode state
  const enableCommentInterface = (e) => {
    setCommentMode(!commentMode);
  };
  // function to delete the post
  const deleteThisPost = (e) => {
    e.preventDefault();
    props.deletePost(shared);
  };
  // function to like or unlike the post
  const likeOrUnlike = (e) => {
    // get the number of current likes and convert it to an integer

    let currentLikes = parseInt(shared.like);
    // if the post is liked, decrement the number of likes by 1

    if (liked) {
      currentLikes -= 1;
    } else {
      // otherwise, increment the number of likes by 1
      currentLikes += 1;
    }
    // update the like property of shared with the new number of likes

    shared.like = currentLikes;
    // call the updatePost function from props to update the post

    props.updatePost(shared);
    setLiked(!liked);
  };

  return (
    <div className="userPost">
      <div className="userPostContainer">
        <div className="userPostUp">
          <div className="userPostOne">
            <img
              src={
                shared.displayName !== undefined
                  ? currentUser.photoURL
                  : Users.filter((name) => name.id === shared.userId)[0].Picture
              }
              alt="userface"
              className="userPostImg"
            />

            <span className="userPostWho">
              {shared.displayName !== undefined
                ? shared.displayName
                : Users.filter((name) => name.id === shared.userId)[0].name}
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
