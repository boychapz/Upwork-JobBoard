import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";

import { PRIMARY_GREEN } from "./StyledComponents";

const Search = styled("div")(({ theme }) => ({
  position: "relative",

  backgroundColor: "white",
  "&:hover": {
    backgroundColor: "#f1f1f1"
  },
  // marginLeft: "-50px",
  width: "100%"
  // [theme.breakpoints.up("sm")]: {
  //   // marginLeft: theme.spacing(0),
  //   width: "auto"
  // }
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: "100%",
  position: "absolute",
  right: "0",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: PRIMARY_GREEN,
  color: "white"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",

  "& .MuiInputBase-input": {
    // padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon

    // transition: theme.transitions.create("width"),
    width: "100%"
    // [theme.breakpoints.up("sm")]: {
    //   width: "12ch",
    //   "&:focus": {
    //     width: "20ch"
    //   }
    // }
  }
}));

export default function BodySearch() {
  return (
    <>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          sx={{ paddingLeft: "15px" }}
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
    </>
  );
}
