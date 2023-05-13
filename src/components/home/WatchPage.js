import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { classMenu } from "../redux/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [useserachparams] = useSearchParams();
  console.log(useserachparams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(classMenu());
  }, [dispatch]);
  // if(!classMenu) return null;

  return (
  <>
  <div className="w-full h-[600]">
  <div className=" d-flex">
  <div>
      <iframe className="mx-3"
        width="1200"
        height="600"
        src={"https://www.youtube.com/embed/"+useserachparams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
    <div className=" w-full h-[600]">
      <LiveChat/>
    </div>
  </div>
    <CommentsContainer/>
  </div>
  </>
  );
};

export default WatchPage;
