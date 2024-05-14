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
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <FacebookIcon className="fbicon" />
          </a>
        </Box>
        <Box className="icon rounded-pill">
          <a href="https://www.whatsapp.com/" target="_blank" rel="noreferrer">
            <WhatsAppIcon className="fbicon" />
          </a>
        </Box>
        <Box className="icon rounded-pill">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <InstagramIcon className="fbicon" />
          </a>
        </Box>
        <Box className="icon rounded-pill">
          <a
            href="https://www.youtube.com/@koliinfotech"
            target="_blank"
            rel="noreferrer"
          >
            <YouTubeIcon className="fbicon" />
          </a>
        </Box>
        <Box className="icon rounded-pill">
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <LinkedInIcon className="fbicon" />
          </a>
        </Box>
      </Box>
    </>
  );
};

export default Icons;
