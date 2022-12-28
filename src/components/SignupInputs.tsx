import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
  styled,
  Select,
  MenuItem,
  Avatar,
} from "@mui/material";

import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import React, { useState } from "react";

interface State {
  password: string;
  showPassword: boolean;
  email: string;
  firstname: string;
  lastname: string;
}

const signUpStyle = (Theme: any) => ({
  fontSize: "12px",
  color: "#005ff9",
  cursor: "pointer",
  fontWeight: "600",
  "&:hover": {
    opacity: 1,
    textDecoration: "underline",
  },
});

const WhiteBorderTextField = styled(TextField)`
  & label#standard-basic-label {
    font-weight: 700;
  }
  & label.Mui-focused {
    color: #005ff9;
  }
  & .MuiOutlinedInput-root {
    border-radius: 10px;
    font-size: 15px;

    &.Mui-focused fieldset {
      border-color: #005ff9;
    }
  }
`;

const SignupInputs = () => {
  const [values, setValues] = React.useState<State>({
    password: "",
    email: "",
    showPassword: false,
    firstname: "",
    lastname: "",
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };
  return (
    <Card
      sx={{ borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px" }}
    >
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography sx={{ fontSize: "20px", fontWeight: "700" }}>
                Signup
              </Typography>
            </Grid>{" "}
            <Grid item xs={12} display="flex" justifyContent="center">
              <Avatar alt="Remy Sharp" sx={{ width: 76, height: 76 }} />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel
                  sx={{ fontWeight: "700" }}
                  id="demo-simple-select-label"
                >
                  Select Grade Level
                </InputLabel>
                <Select
                  name="select"
                  sx={{ borderRadius: "10px" }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Grade Level"
                >
                  <MenuItem value="College">College</MenuItem>
                  <MenuItem value="SeniorHighSchool">
                    Senior High School
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel
                  sx={{ fontWeight: "700" }}
                  id="demo-simple-select-label"
                >
                  Select course
                </InputLabel>
                <Select
                  name="select"
                  sx={{ borderRadius: "10px" }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Grade Level"
                >
                  <MenuItem value="College">College</MenuItem>
                  <MenuItem value="SeniorHighSchool">
                    Senior High School
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl variant="outlined" fullWidth>
                <WhiteBorderTextField
                  onChange={handleOnChange}
                  name="email"
                  size="medium"
                  type="email"
                  id="standard-basic"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  required
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl variant="outlined" fullWidth>
                <WhiteBorderTextField
                  onChange={handleOnChange}
                  name="email"
                  size="medium"
                  type="email"
                  id="standard-basic"
                  label="Firstname"
                  variant="outlined"
                  fullWidth
                  required
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl variant="outlined" fullWidth>
                <WhiteBorderTextField
                  onChange={handleOnChange}
                  name="email"
                  size="medium"
                  type="email"
                  id="standard-basic"
                  label="Lastname"
                  variant="outlined"
                  fullWidth
                  required
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl variant="outlined" fullWidth size="medium">
                <InputLabel
                  sx={{ fontSize: "12px", fontWeight: "700" }}
                  htmlFor="outlined-adornment-password"
                >
                  Password
                </InputLabel>
                <OutlinedInput
                  onChange={handleOnChange}
                  name="password"
                  sx={{ borderRadius: "10px" }}
                  required
                  type={values.showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <MdVisibilityOff />
                        ) : (
                          <MdVisibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              {!values.email || !values.password ? (
                <Button
                  disabled
                  type="submit"
                  variant="contained"
                  sx={{
                    borderRadius: "10px",
                    textTransform: "capitalize",
                    backgroundColor: "#005ff9",
                    padding: "10px",
                    fontSize: "14px",
                    fontWeight: "700",
                  }}
                  fullWidth
                >
                  Signup
                </Button>
              ) : (
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    borderRadius: "10px",
                    textTransform: "capitalize",
                    backgroundColor: "#005ff9",
                    padding: "10px",
                    fontSize: "14px",
                    fontWeight: "700",
                  }}
                  fullWidth
                >
                  Signup
                </Button>
              )}
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Typography
                sx={{
                  fontSize: "12px",
                  opacity: "0.6",
                  cursor: "pointer",
                  fontWeight: "600",
                }}
              >
                Already have an account?
                <Box component="span" sx={signUpStyle}>
                  {` `}Sign in
                </Box>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default SignupInputs;
