import React, { useEffect, useState } from "react";
import ProfileInfo from "./ProfileInfo";
import Header from "./Header";
import Demo from "./Demo";
import Icons from "./Icons";
import { HashLoader } from "react-spinners";

const Home = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  window.addEventListener("click", () => {
    setIsClicked(true);
  });

  return (
    <>
      {isClicked ? (
        <div>
          {isLoading ? (
            <div className="loading-spinner">
              <HashLoader color={"#3E3E3E"} size={50} />
            </div>
          ) : (
            <>
              <Header />
              <ProfileInfo />
              <Demo />
              <Icons />
            </>
          )}
        </div>
      ) : (
        <>
          <Header />
          <div className="home-container">
            <button
              className="home-btn"
              onClick={() => {
                setIsClicked(true);
              }}
            >
              Click
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
