import { Button, Typography, Box } from "@mui/material";
import React from "react";
import wallpaper from '../Assets/homepageimg.png'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>
      <img src={wallpaper} width='100%' height='400' />
      <Box display="flex" flexDirection="column" alignItems="center">
        <Button
          LinkComponent={Link}
          to="/books"
          sx={{ marginTop: 15, background: "orangered" }}
          variant="contained"
        >
          <Typography variant="h3">View All products</Typography>
        </Button>
      </Box> 

      </div>
      
    </div>
  );
};

export default Home;