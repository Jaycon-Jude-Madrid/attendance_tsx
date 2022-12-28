import { Box, Divider, Typography } from "@mui/material";
import CsgLogo from "../assets/CsgLogo.png";
import React from "react";

const TypographyStyle = (theme: any) => ({
  fontSize: "48px",
  fontWeight: "700",
  [theme.breakpoints.down("sm")]: {
    fontSize: "32px",
  },
});

const LoginHead = () => {
  return (
    <Box>
      <Box sx={{ padding: "10px", display: "flex", justifyContent: "end" }}>
        <img src={CsgLogo} alt="logo" width="80px" height="100%" />
      </Box>
      <Box
        sx={{
          height: "250px",
          display: "flex",
          padding: "20px",
          justifyContent: "start",
          gap: "20px",
          flexDirection: "column",
          color: "white",
        }}
      >
        <Typography sx={TypographyStyle}>Create better together.</Typography>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "700",
          }}
        >
          Aim High with STI.
          <Box sx={{ borderBottom: "5px solid yellow", width: "130px" }} />
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginHead;
