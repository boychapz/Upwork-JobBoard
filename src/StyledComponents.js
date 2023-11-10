import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ListItemText from "@mui/material/ListItemText";

export const PRIMARY_GREEN = "#39B54A";
export const SECONDARY_NAVY = "#2B5468";

export const PrimaryButton = styled(Button)(() => ({
  background: PRIMARY_GREEN
}));
export const ActiveButton = styled(ListItemText)(() => ({
  background: PRIMARY_GREEN
}));

export const LoginContainer = styled(Box)(() => ({
  width: "100vw",
  height: "100vh",
  display: "flex",
  backgroundColor: "lightgrey",
  justifyContent: "center",
  alignItems: "center"
}));

export const LoginBox = styled(Box)(() => ({
  width: "450px",
  height: "300px",
  backgroundColor: "white"
}));
