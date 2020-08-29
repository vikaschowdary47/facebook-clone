import React from "react";
import "./Feed.css";
import StoryReel from "./Story/StoryReel";
import MessageSender from "./MessageSender/MessageSender";

const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
    </div>
  );
};

export default Feed;
