import "./App.css";
import {
  Container,
  ThemeProvider,
  createTheme,
  Typography,
} from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Box } from "@mui/system";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "'Open Sans', sans-serif",
    },
  },
});
function App() {
  return (
    <Box sx={{ height: "100vh", paddingTop: "20px" }}>
      <ThemeProvider theme={theme}>
        <Container maxWidth="sm">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </Box>
  );
}

export default App;
