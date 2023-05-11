import React, { useEffect, useState } from "react";
import youtoubeimg from "../assets//images/youtube.png";
import listitems from "../assets/images/listofitems.png";
import serach from "../assets/images/search.png";
import "./header.css";
import voice from "../assets/images/voice.png";
import createvideo from "../assets/images/newrecord.png";
import bell from "../assets/images/bell.png";
import user from "../assets/images/user.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../redux/appSlice";
import { SEARCH_URL } from "../assets/images/constatnts/constents";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  // console.log(searchInput);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      getSearchQuery();
      console.log(searchInput);
    }, 200);
  }, [searchInput]);

  const getSearchQuery = async () => {
    const searchQuery = await fetch(SEARCH_URL + searchInput);
    const data = searchQuery.json();
    console.log(data);
  };
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <>
      <div className="navbar d-flex justify-content-space-between position-sticky">
        <div className="d-flex mx-1">
          <div className="mx-4">
            <button>
              <img
                onClick={() => toggleMenuHandler()}
                src={listitems}
                alt="list of items"
                width="50px"
                height="50px"
                className="mt-3 listitems"
              />
            </button>
          </div>
          <div>
            <Link to="/">
              {" "}
              <img
                src={youtoubeimg}
                alt="youtoube imgae"
                className="icon-home"
                width="80px"
              />
            </Link>
          </div>
        </div>
        <div className="wrapper mr-4">
          <div className="searchBar">
            <input
              id="searchQueryInput"
              type="text"
              name="searchQueryInput"
              placeholder="Search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button
              id="searchQuerySubmit"
              type="submit"
              name="searchQuerySubmit"
            >
              <img src={serach} alt="" width="30px" mr-4 />
            </button>
            <button>
              <img
                src={voice}
                alt=""
                className="20px ml-3"
                height="10px "
                width="25px"
              />
            </button>
            <button>sera</button>
          </div>
          <div></div>
        </div>
        <div className="d-flex justify-content-space-between mx-5 icons-items">
          <div className=" mx-3">
            <img src={createvideo} alt="" height="10px " width="25px" />
          </div>
          <div className="  mx-3">
            <img src={bell} alt="" height="10px " width="25px" />
          </div>
          <div className=" mx-3">
            <img src={user} alt="" height="10px " width="25px" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
