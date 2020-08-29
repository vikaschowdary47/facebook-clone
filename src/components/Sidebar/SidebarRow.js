import React from "react";
import { Avatar } from "@material-ui/core";
import "./SidebarRow.css";

const SidebarRow = ({ src, Icon, title }) => {
  return (
    <div className="sidebarRow">
      {src && <Avatar />}
      {Icon && <Icon />}
      <p>{title}</p>
    </div>
  );
};

export default SidebarRow;
