import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TopNews from "@/assets/top-news.png";
import TopNews2 from "@/assets/top-news2.png";
import Image from "next/image";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const SideBarPages = () => {
  return (
    <div>
      {" "}
      <Card className="my-2">
        <CardMedia>
          <Image src={TopNews} alt="TopNews" />
        </CardMedia>
        <CardContent>
          <p className="text-white w-[1000px] bg-red-600 px-1  underline rounded">
            Technology
          </p>
          <Typography component="div">
            Bitcoin Climbs as Elon Musk Says Tesla Likely to accept it again
          </Typography>
          <Typography
            className="bg-red-600 w-[220px] px-1 text-white"
            gutterBottom
            variant="body2"
            component="div"
          >
            By Faruk Ahmad -Feb 09 2024
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default SideBarPages;
