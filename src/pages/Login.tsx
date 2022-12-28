import { Box } from "@mui/material";

import React, { FC } from "react";
import LoginHead from "../components/LoginHead";
import LoginInputs from "../components/LoginInputs";

const Login: FC = () => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(225deg, hsla(55, 100%, 50%, 1) 18%, hsla(211, 100%, 50%, 1) 18%)",
        borderRadius: "20px",
      }}
    >
      <LoginHead />

      <LoginInputs />
    </Box>
  );
};

export default Login;
