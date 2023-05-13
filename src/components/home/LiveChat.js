import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../redux/chatSlice";
import ChatMeassage from "./ChatMeassage";
import {
  generateRandomMessage,
  generateRandomName,
} from "../assets/helper/helper";

const LiveChat = () => {
  const[liveMessage,setLiveMessage]=useState("")
  const dispatch = useDispatch();
  const ChatMeassages = useSelector((store) => store.chat.message);
  useEffect(() => {
    const intervel = setInterval(() => {
      console.log("data is displaying ar");
      dispatch(
        addMessage({
          name: generateRandomName(),
          meassage: generateRandomMessage(50),
        })
      );
    }, 2000);
    return () => clearInterval(intervel);
  }, []);
  return (
    <>
      <div className="mx-2  border w-full h-[600px] p-2 border-black overflow-y-scroll flex flex-column-reverse">
        <div>
          {ChatMeassages.map((data) => (
            <ChatMeassage name={data.name} meassage={data.meassage} />
          ))}
        </div>
      </div>
      <form className="border mx-2 " onSubmit={(e)=>{
        e.preventDefault();
        console.log("on form submit ,"+liveMessage);
        dispatch({
          name:'mastan',
          message:liveMessage,
        })
        setLiveMessage("");
      }}>
        <input type="text" className="mx-3 w-96" name=""value={liveMessage} onChange={(e)=>setLiveMessage(e.target.value)} />
        <button className="btn btn-success p-1" type="submit">send</button>
      </form>
    </>
  );
};

export default LiveChat;
