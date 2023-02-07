import AddSomething from "../addSomething/AddSomething";
import UserPost from "../userPost/UserPost";
import "./Display.css";
import { Posts } from "../../data";
import { useState } from "react";
function Display() {
  const [customPosts, setCustomPosts] = useState(Posts);

  // Function to add a new post to the beginning of the customPosts array
  const addNewPost = (post) => {
    // Make a copy of the current customPosts array
    const currentPostsArray = [...customPosts];
    // Add the new post to the beginning of the array
    currentPostsArray.unshift(post);
    // Update the customPosts state with the new array
    setCustomPosts(currentPostsArray);
  };

  // Function to update the data of a post in the customPosts array
  const updatePostData = (postToUpdate) => {
    // Make a copy of the current customPosts array
    const currentPostsArray = [...customPosts];
    // Filter through the array to find the post with matching body
    // and update its data
    currentPostsArray.filter((item) => {
      if (postToUpdate.body === item.body) {
        // Update the post's data
        item = postToUpdate;
      }
      return item;
    });
    // Update the customPosts state with the new array
    setCustomPosts(currentPostsArray);
  };
  // Function to remove a post from the customPosts array
  const removePost = (post) => {
    // Make a copy of the current customPosts array
    const currentPostsArray = [...customPosts];
    // Filter through the array to find the post that needs to be removed
    // and create a new array without it
    const filteredArray = currentPostsArray.filter((item) => item !== post);
    // Update the customPosts state with the new array
    setCustomPosts(filteredArray);
  };

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
                addNewPost={addNewPost}
              />
            );
          })
        ) : (
          <></>
        )}

        {/* add our posts array here because they are going to be displayed here */}
        {/* {Posts.map((name) => (
          <UserPost
            key={name.id}
            shared={name}
            updatePost={updatePostData}
            deletePost={removePost}
          />
        ))} */}
      </div>
    </div>
  );
}

export default Display;
