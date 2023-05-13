import React from "react";

const ChatMeassage = ({name,meassage}) => {

  return (
    <div className="d-flex items-center">
   <div>
   <img
        id="img"
        draggable="false"
        className="style-scope yt-img-shadow"
        alt=""
        height="24"
        width="24"
        src="https://yt4.ggpht.com/ytc/AGIKgqPEK8OMupUF00-wftiE2PCwJG89xmkXdUQvBA=s32-c-k-c0x00ffffff-no-rj"
      />
 
   </div>
   <div>
   <span className="mx-3">{name}</span>
      <span>{meassage}</span>
   </div>
    </div>
  );
};

export default ChatMeassage;
