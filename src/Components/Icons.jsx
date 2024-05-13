import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import CallIcon from "@mui/icons-material/Call";
import InfoIcon from "@mui/icons-material/Info";
import { Box } from "@mui/material";

const Icons = () => {
  return (
    <>
      <Box className="icons-wrapper">
        <Box className="icon rounded-pill">
          <FacebookIcon className="fbicon" />
        </Box>
        <Box className="icon rounded-pill">
          <WhatsAppIcon className="fbicon" />
        </Box>
        <Box className="icon rounded-pill">
          <InstagramIcon className="fbicon" />
        </Box>
        <Box className="icon rounded-pill">
          <CallIcon className="fbicon" />
        </Box>
        <Box className="icon rounded-pill">
          <InfoIcon className="fbicon" />
        </Box>
      </Box>
    </>
  );
};

export default Icons;
