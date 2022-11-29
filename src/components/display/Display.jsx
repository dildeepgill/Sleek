import AddSomething from "../addSomething/AddSomething";
import UserPost from "../userPost/UserPost";
import "./Display.css";
import { Posts } from "../../data";
import { useState } from "react";
function Display() {
  //posts has to be a useState coz it renders the page
  const [customPosts, setCustomPosts] = useState(Posts);

  //write the function to updatePosts
  const addNewPost = (post) => {
    const currentPostsArray = [...customPosts];
    currentPostsArray.unshift(post);
    setCustomPosts(currentPostsArray);
  };

  const updatePostData = (postToUpdate) => {
    const currentPostsArray = [...customPosts];
    currentPostsArray.filter((item) => {
      if (postToUpdate.body === item.body) {
        //this is the same post in the array
        item = postToUpdate;
      }
      return item;
    });
    setCustomPosts(currentPostsArray);
  };

  const removePost = (post) => {
    const currentPostsArray = [...customPosts];
    const filteredArray = currentPostsArray.filter((item) => item !== post);
    setCustomPosts(filteredArray);
  };

  //another function updatePosts should actually update the right post in the array based on what happens in the actual custom post here.

  return (
    <div className="display">
      <div className="displayContainer">
        <AddSomething addToPosts={addNewPost} />

        {customPosts.length !== 0 ? (
          customPosts.map((name, index) => {
            return (
              <UserPost
                key={index}
                shared={name}
                updatePost={updatePostData}
                deletePost={removePost}
              />
            );
          })
        ) : (
          <></>
        )}

        {/* add our posts array here because they are going to be displayed here */}
        {Posts.map((name) => (
          <UserPost
            key={name.id}
            shared={name}
            updatePost={updatePostData}
            deletePost={removePost}
          />
        ))}
      </div>
    </div>
  );
}

export default Display;
