import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box } from "@mui/material";

const Icons = () => {
  return (
    <>
      <Box className="icons-wrapper">
        <Box className="icon rounded-pill">
          <a href="https://www.facebook.com/">
            <FacebookIcon className="fbicon" />
          </a>
        </Box>
        <Box className="icon rounded-pill">
          <a href="https://www.whatsapp.com/">
            <WhatsAppIcon className="fbicon" />
          </a>
        </Box>
        <Box className="icon rounded-pill">
          <a href="https://www.instagram.com/">
            <InstagramIcon className="fbicon" />
          </a>
        </Box>
        <Box className="icon rounded-pill">
          <a href="https://www.youtube.com/@koliinfotech">
            <YouTubeIcon className="fbicon" />
          </a>
        </Box>
        <Box className="icon rounded-pill">
          <a href="https://www.linkedin.com/">
            <LinkedInIcon className="fbicon" />
          </a>
        </Box>
      </Box>
    </>
  );
};

export default Icons;
