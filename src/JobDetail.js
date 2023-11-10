import TopNav from "./TopNav";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { PrimaryButton } from "./StyledComponents";
import { PRIMARY_GREEN } from "./StyledComponents";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import CheckCircleOutlineSharpIcon from "@mui/icons-material/CheckCircleOutlineSharp";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";
import TextField from "@mui/material/TextField";
import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";

export default function JobDetail({ Jobs }) {
  let { id } = useParams();

  const selectedJob = Jobs.find((job) => {
    return Number(id) === job.id;
  });
  return (
    <>
      <TopNav />
      <Box
        sx={{
          display: "flex",
          background: "lightgrey",
          padding: "5% 10%",
          justifyContent: "space-between"
        }}
      >
        <Box sx={{ width: "65%", background: "lightgrey", textAlign: "left" }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "550", marginBottom: "30px" }}
          >
            {" "}
            {selectedJob.title}
          </Typography>
          <Divider />
          <Box>
            <Typography
              marginTop="30px"
              marginBottom="7px"
              variant="subtitle2"
              sx={{ fontWeight: "bold", color: PRIMARY_GREEN }}
            >
              {selectedJob.category}
            </Typography>
            <Typography marginBottom="7px" variant="subtitle2" sx={{}}>
              Posted {selectedJob.postedTime}
            </Typography>
            <Box sx={{ display: "flex", marginBottom: "30px" }}>
              <img
                alt="location"
                src="https://assets.codepen.io/6060109/location-icon.png"
                style={{ height: "20px", marginRight: "5px" }}
              />
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: "bold", fontSize: "14px" }}
              >
                {selectedJob.remote ? "Remote" : "onsite"}
                {selectedJob.location}
                {/* {job.remote ? "Remote, " : "onsite,"}
                    {job.location} */}
              </Typography>
            </Box>
          </Box>
          <Divider />
          <Typography
            marginTop="30px"
            variant="body2"
            sx={{ fontSize: "small", marginBottom: "20px" }}
          >
            {selectedJob.description}
            {/* <br/>
            <br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            <br/>
            <br/> */}

            {/* {job.description} */}
          </Typography>
          <Divider />
        </Box>

        <Box
          sx={{
            background: "white",
            width: "30%",
            borderRadius: "5px"
          }}
        >
          <Box marginBottom="30px">
            <PrimaryButton
              sx={{
                display: "block",
                margin: "20px auto 0 auto ",
                width: "73%",
                textTransform: "none",
                color: "white",
                fontSize: "18px",
                height: "7%",
                borderRadius: "20px"
              }}
            >
              {" "}
              Submit a Proposal
            </PrimaryButton>

            <PrimaryButton
              sx={{
                display: "block",
                margin: "20px auto 0 auto ",
                textTransform: "none",
                width: "73%",
                color: PRIMARY_GREEN,
                background: "white",
                fontSize: "18px",
                height: "7%",
                border: "1px solid green",
                borderRadius: "20px"
              }}
            >
              {" "}
              <FavoriteBorderSharpIcon
                sx={{ marginRight: "3px", fontSize: "medium" }}
              />{" "}
              Save Job
            </PrimaryButton>
          </Box>
          <Divider />
          <Box
            marginBottom="25px"
            sx={{ padding: "10px 40px", textAlign: "left", marginTop: "30px" }}
          >
            <Typography
              marginBottom="15px"
              variant="subtitle2"
              sx={{ fontWeight: "bold", fontSize: "16px" }}
            >
              {" "}
              About the client
            </Typography>
            <Typography
              variant="subtitle2"
              marginBottom="25px"
              sx={{ fontSize: "16px" }}
            >
              <CheckCircleOutlineSharpIcon
                sx={{ fontSize: "medium", color: PRIMARY_GREEN }}
              />{" "}
              Payment verified
            </Typography>
            <Typography variant="subtitle2" sx={{ fontSize: "16px" }}>
              {" "}
              <LocationOnSharpIcon
                sx={{ fontSize: "medium", color: PRIMARY_GREEN }}
              />{" "}
              United States
            </Typography>
          </Box>
          <Divider />

          <Box
            marginTop="20px"
            sx={{ padding: "10px 40px", textAlign: "left" }}
          >
            <Typography
              marginBottom="7px"
              variant="subtitle2"
              sx={{ fontWeight: "bold", fontSize: "16px" }}
            >
              {" "}
              Job Link
            </Typography>

            <Box marginBottom="30px">
              {" "}
              <TextField
                sx={{ height: "10px", width: "100%" }}
                disabled
                id="filled-disabled"
                defaultValue="https://website.com/computer"
                variant="filled"
              />
              <br />
            </Box>

            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: "bold",
                fontSize: "16px",
                color: PRIMARY_GREEN
              }}
            >
              {" "}
              Copy link
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
