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
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Feed;
