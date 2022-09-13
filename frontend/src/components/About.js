import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{ fontFamily: "fantasy" }} variant="h2">
          Book Store made by Nikhil Aggarwal
        </Typography>
        <Typography sx={{ fontFamily: "fantasy" }} variant="h3">
          Using MERN STACK
        </Typography>
      </Box>
    </div>
  );
};

export default About;