import React from "react";
import "./StoryReel.css";
import Story from "./Story";

const StoryReel = () => {
  return (
    <div className="stroyReel">
      <Story
        title="Arjun"
        image="https://www.techadvisor.co.uk/cmsdata/features/3656797/fbstory4.jpg"
      />
      <Story
        title="Ram"
        image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/92532c1c-85a6-41bc-accb-47642d89ad7e/d9eq93i-a2d919a9-05ae-4d72-ad6d-28f410fc691a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvOTI1MzJjMWMtODVhNi00MWJjLWFjY2ItNDc2NDJkODlhZDdlXC9kOWVxOTNpLWEyZDkxOWE5LTA1YWUtNGQ3Mi1hZDZkLTI4ZjQxMGZjNjkxYS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.phpGaWErTMS91re0Zxq7yTybuS6hjVWlT16WcwGR7Wc"
      />
      <Story
        profileSrc="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2020%2F03%2Fjoey.jpg"
        title="Joey"
        image="https://www.techadvisor.co.uk/cmsdata/features/3656797/fbstory4.jpg"
      />
      <Story
        profileSrc="https://i.pinimg.com/750x/62/a3/c1/62a3c1a110bbff7fb63bb70192c21a94.jpg"
        title="Monica"
        image="https://www.techadvisor.co.uk/cmsdata/features/3656797/fbstory4.jpg"
      />
    </div>
  );
};

export default StoryReel;
