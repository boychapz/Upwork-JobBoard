import TopNav from "./TopNav";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import CategoryMenu from "./CategoryMenu";
import React from "react";

import BodySearch from "./BodySearch";

import JobList from "./JobList";

export default function JobBoard({ Jobs }) {
  const [filterJob, setFilterJob] = React.useState("");
  let categoryAvailable = [];

  for (let categoryJob of Jobs) {
    if (!categoryAvailable.includes(categoryJob.category)) {
      categoryAvailable.push(categoryJob.category);
    }
  }

  return (
    <>
      <TopNav />
      <Box
        sx={{
          display: "flex",
          background: "lightgrey",
          padding: "5% 10%"
        }}
      >
        <Box
          sx={{
            width: "25%",
            background: "lightgrey",
            textAlign: "left"
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: "550", minWidth: "100px" }}
          >
            {" "}
            Find Work
          </Typography>
          <Typography
            variant="h6"
            sx={{ marginTop: "30px", fontWeight: "550" }}
          >
            Categories
          </Typography>
          <CategoryMenu
            categoryAvailable={categoryAvailable}
            filterJob={filterJob}
            setFilterJob={setFilterJob}
          />
        </Box>

        <Box
          sx={{
            width: "75%",
            background: "lightgrey"
          }}
        >
          <BodySearch />
          <JobList
            jobs={Jobs.filter((job) => {
              if (!filterJob) {
                return true;
              }
              return job.category === filterJob;
            })}
          />
        </Box>
      </Box>
    </>
  );
}
