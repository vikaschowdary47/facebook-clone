import React from "react";
import { Avatar } from "@material-ui/core";
import "./MessageSender.css";

const MessageSender = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu8vCjhhr6HbjrJ4sw9_m4TgrF_cErWrWpuOohit=s83-c-mo" />
        <form>
          <input
            className="messageSender__input"
            placeholder={`What's on your mind `}
          />
          <input placeholder="image URL (Optional)" />
          <button className type="submit" onClick={handleSubmit}>
            Hidden Submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom"></div>
      <h1>message</h1>
    </div>
  );
};

export default MessageSender;
