import { Typography } from "@mui/material";
import * as React from "react";
import { PrimaryButton, LoginContainer, LoginBox } from "./StyledComponents";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function Login({
  email,
  isLoggedIn,
  password,
  setIsLoggedIn,
  setEmail,
  setPassword
}) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <LoginContainer>
        <LoginBox>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", padding: "5px", marginBottom: "20px" }}
          >
            Log in
          </Typography>

          <FormControl variant="outlined" sx={{ padding: "5px" }}>
            <OutlinedInput
              sx={{ marginBottom: "10px" }}
              id="outlined-start-adornment"
              variant="outlined"
              placeholder="Username or Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              startAdornment={
                <InputAdornment position="start">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <PrimaryButton
            sx={{
              display: "block",
              margin: "20px auto 0 auto ",
              width: "73%",
              borderRadius: "20px"
            }}
            variant="contained"
            onClick={() => {
              email && password !== ""
                ? setIsLoggedIn(true)
                : setIsLoggedIn(false);

              console.log(
                "userlogged?",
                isLoggedIn,
                "username: ",
                email,
                "password: ",
                password
              );
            }}
          >
            Login
          </PrimaryButton>
        </LoginBox>
      </LoginContainer>
    </>
  );
}
