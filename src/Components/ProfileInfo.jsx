import React from "react";
import video from "../Images/wap_gify_EDRaid1_117797_110535_320.mp4";
import profile from "../Images/profile.jpg";
import { IoCall } from "react-icons/io5";

const ProfileInfo = () => {
  return (
    <>
      <div className="container main-header">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 video-container">
            <video src={video} autoPlay muted controls></video>
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
