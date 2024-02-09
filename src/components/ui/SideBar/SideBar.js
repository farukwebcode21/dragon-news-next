import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TopNews from "@/assets/side-bottom-img.png";
import TopNews2 from "@/assets/side-top-news.png";
import Image from "next/image";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const SideBarPages = () => {
  return (
    <div>
      <Card className="my-2">
        <CardMedia>
          <Image src={TopNews2} alt="TopNews" />
        </CardMedia>
        <CardContent>
          <p className="text-white w-[1000px] bg-red-600 px-1  underline rounded">
            Technology
          </p>
          <Typography component="div">
            Bitcoin Climbs as Elon Musk Says Tesla Likely to accept it again
          </Typography>
          <Typography className="text-xs px-1">
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
      <Card className="my-2">
        <CardMedia>
          <Image
            className="h-[150px] object-cover"
            src={TopNews}
            alt="TopNews"
          />
        </CardMedia>
        <CardContent>
          <p className="text-white w-[1000px] bg-red-600 px-1  underline rounded">
            Technology
          </p>
          <Typography component="div">
            Bitcoin Climbs as Elon Musk Says Tesla Likely to accept it again
          </Typography>
          <Typography className="text-xs px-1">
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
      <Card className="my-2">
        <CardMedia>
          <Image src={TopNews2} alt="TopNews" />
        </CardMedia>
        <CardContent>
          <p className="text-white w-[1000px] bg-red-600 px-1  underline rounded">
            Technology
          </p>
          <Typography component="div">
            Bitcoin Climbs as Elon Musk Says Tesla Likely to accept it again
          </Typography>
          <Typography className="text-xs px-1">
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
      <Card className="my-2">
        <CardMedia>
          <Image
            className="h-[150px] object-cover"
            src={TopNews}
            alt="TopNews"
          />
        </CardMedia>
        <CardContent>
          <p className="text-white w-[1000px] bg-red-600 px-1  underline rounded">
            Technology
          </p>
          <Typography component="div">
            Bitcoin Climbs as Elon Musk Says Tesla Likely to accept it again
          </Typography>
          <Typography className="text-xs px-1">
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
