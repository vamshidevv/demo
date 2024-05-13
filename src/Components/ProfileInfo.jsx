import React from "react";
import video from "../Images/wap_gify_EDRaid1_117797_110535_320.mp4";
import profile from "../Images/profile.jpg";
import CallIcon from "@mui/icons-material/Call";

const ProfileInfo = () => {
    const downloadContact = () => {
    const vCardContent = `BEGIN:VCARD
      VERSION:3.0
      FN:SAGAR UMRETHIYA
      TEL:+1234567890
      END:VCARD`;

    const blob = new Blob([vCardContent], { type: "text/vcard" });

    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "contact.vcf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

  };

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
                <h3>NIHAL</h3>
                <h3>KOLI</h3>
              </div>
            </div>
            <div className="save-contact-container">
              <a
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="save-contact">
                  <div className="call-icon">
                    <CallIcon style={{ fontSize: "2rem" }} onClick={downloadContact} />
                  </div>
                  <div className="contact-btn">
                    <button onClick={downloadContact}>Save Contact</button>
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
