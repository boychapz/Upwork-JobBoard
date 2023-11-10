import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function JobList({ jobs }) {
  return (
    <>
      <Paper>
        <Box
          sx={{
            width: "100%",
            height: "auto",
            background: "white",
            marginTop: "34px",
            borderRadius: "3px"
          }}
        >
          {jobs.map((job) => {
            return (
              <Box
                sx={{ padding: "10px 20px", textAlign: "left" }}
                key={job.id}
              >
                <Link to={`/job/${job.id}`}>
                  <Typography
                    variant="h6"
                    sx={{ padding: "10px 0", fontWeight: "bold" }}
                  >
                    {job.title}
                  </Typography>
                </Link>
                <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                  Hourly: ${job.hourlyUSD}.00
                </Typography>
                <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                  Posted {job.postedTime}
                </Typography>
                <Box sx={{ display: "flex", marginBottom: "5px" }}>
                  <img
                    alt="location"
                    src="https://assets.codepen.io/6060109/location-icon.png"
                    style={{ height: "20px", marginRight: "5px" }}
                  />
                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: "bold", fontSize: "14px" }}
                  >
                    {job.remote ? "Remote, " : "onsite,"}
                    {job.location}
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  sx={{ fontSize: "small", marginBottom: "20px" }}
                >
                  {job.description}
                </Typography>
                <Divider />
              </Box>
            );
          })}
        </Box>
      </Paper>
    </>
  );
}
