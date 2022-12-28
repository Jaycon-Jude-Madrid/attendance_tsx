import { Box } from "@mui/material";
import React, { FC } from "react";
import SignupHead from "../components/SignupHead";
import SignupInputs from "../components/SignupInputs";

const Signup: FC = () => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(225deg, hsla(55, 100%, 50%, 1) 18%, hsla(211, 100%, 50%, 1) 18%)",
        borderRadius: "20px",
      }}
    >
      <SignupHead />
      <SignupInputs />
    </Box>
  );
};

export default Signup;
