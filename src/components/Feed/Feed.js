import React from "react";
import "./Feed.css";
import StoryReel from "./Story/StoryReel";
import MessageSender from "./MessageSender/MessageSender";
import Post from "./PostComp/Post";

const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://lh3.googleusercontent.com/ogw/ADGmqu8vCjhhr6HbjrJ4sw9_m4TgrF_cErWrWpuOohit=s83-c-mo"
        message="it works"
        timestamp="timestamp"
        username="vikas"
        image="https://image.shutterstock.com/image-vector/vector-illustration-word-game-over-260nw-1230400006.jpg"
      />
      <Post
        profilePic="https://lh3.googleusercontent.com/ogw/ADGmqu8vCjhhr6HbjrJ4sw9_m4TgrF_cErWrWpuOohit=s83-c-mo"
        message="it works"
        timestamp="timestamp"
        username="vikas"
        image="https://image.shutterstock.com/image-vector/vector-illustration-word-game-over-260nw-1230400006.jpg"
      />
      <Post
        profilePic="https://lh3.googleusercontent.com/ogw/ADGmqu8vCjhhr6HbjrJ4sw9_m4TgrF_cErWrWpuOohit=s83-c-mo"
        message="it works"
        timestamp="timestamp"
        username="vikas"
        image="https://image.shutterstock.com/image-vector/vector-illustration-word-game-over-260nw-1230400006.jpg"
      />
    </div>
  );
};

export default Feed;
