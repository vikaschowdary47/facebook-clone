import React from "react";
import "./StoryReel.css";
import Story from "./Story";

const StoryReel = () => {
  return (
    <div className="stroyReel">
      <Story
        title="Arjun"
        image="https://www.zynga.com/storage/2018/09/keyart-576x1024-min.png"
      />
      <Story
        title="Ram"
        image="https://image.shutterstock.com/image-vector/vector-illustration-word-game-over-260nw-1230400006.jpg"
      />
      <Story
        profileSrc="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2020%2F03%2Fjoey.jpg"
        title="Joey"
        image="https://i.ytimg.com/vi/ny6_qRE9Zvg/maxresdefault.jpg"
      />
      <Story
        profileSrc="https://vignette.wikia.nocookie.net/friends/images/c/c4/Monica_overalls.jpg/revision/latest?cb=20190210055646"
        title="Monica"
        image="https://my.games/hotbox/mygames/media/games/bd58be7325348b9bfa72ece1af29e98a.jpg"
      />
      <Story
        title="Raj"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSPxFoTHbPts21Dk5IkPcy21HbvGbPcWKV-AQ&usqp=CAU"
      />
    </div>
  );
};

export default StoryReel;
