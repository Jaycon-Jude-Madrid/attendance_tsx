import { Box, Typography } from "@mui/material";
import React from "react";
import CsgLogo from "../assets/CsgLogo.png";

const SignupHead = () => {
  return (
    <Box>
      <Box sx={{ padding: "10px", display: "flex", justifyContent: "end" }}>
        <img src={CsgLogo} alt="logo" width="80px" height="100%" />
      </Box>
      <Box
        sx={{
          height: "150px",
          display: "flex",
          padding: "20px",
          justifyContent: "start",
          gap: "20px",
          flexDirection: "column",
          color: "white",
        }}
      >
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "700",
          }}
        >
          Aim High with STI.
          <Typography
            sx={{ borderBottom: "5px solid yellow", width: "130px" }}
          />
        </Typography>
      </Box>
    </Box>
  );
};

export default SignupHead;
