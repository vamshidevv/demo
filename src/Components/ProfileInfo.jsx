import React, { useRef } from "react";
import video from "../Images/ezgif-1-d13da8eb06.mp4"
import profile from "../Images/profile.jpg";
import { IoCall } from "react-icons/io5";

const ProfileInfo = () => {
  const videoRef = useRef(null);

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <>
      <div className="container main-header">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 video-container">
            <video
              ref={videoRef}
              src={video}
              autoPlay
              muted
              onClick={togglePlayPause}
            ></video>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 profile-container">
            <div className="profile">
              <div className="image">
                <img src={profile} alt="" />
              </div>
              <div className="text">
                <h3>SAGAR</h3>
                <h3>UMRETHIYA</h3>
              </div>
            </div>
            <div className="save-contact-container">
              <a
                href="https://www.whatsapp.com/contact/noclient?lang=en_US"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="save-contact">
                  <div className="call-icon">
                    <IoCall style={{ fontSize: "2rem" }} />
                  </div>
                  <div className="contact-btn">
                    <button>Save Contact</button>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
