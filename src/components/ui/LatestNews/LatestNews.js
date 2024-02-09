import * as React from "react";
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

export default function LatestNews() {
  return (
    // sx={{ maxWidth: 800 }}
    <Box>
      <Card className="my-2">
        <CardMedia>
          <Image src={TopNews} alt="TopNews" />
        </CardMedia>
        <CardContent>
          <p className="text-white w-[130px] bg-red-600 px-1  font-bold uppercase underline rounded">
            Technology
          </p>
          <Typography gutterBottom variant="h5" component="div">
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
            species, ranging across all continents except Antarctica Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Cupiditate quam ducimus
            quae iusto quas maxime repellat dolore praesentium eius porro, nobis
            quasi qui hic dolores id! Odio eius error tempora nostrum
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Card className="my-2">
            <CardMedia>
              <Image src={TopNews} alt="TopNews" />
            </CardMedia>
            <CardContent>
              <p className="text-white w-[130px] bg-red-600 px-1  font-bold uppercase underline rounded">
                Technology
              </p>
              <Typography gutterBottom variant="body1" component="div">
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
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate quam ducimus quae iusto quas maxime repellat
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className="my-2">
            <CardMedia>
              <Image src={TopNews2} alt="TopNews" />
            </CardMedia>
            <CardContent>
              <p className="text-white w-[130px] bg-red-600 px-1  font-bold uppercase underline rounded">
                Social
              </p>
              <Typography gutterBottom variant="body1" component="div">
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
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate quam ducimus quae iusto quas maxime repellat
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className="my-2">
            <CardMedia>
              <Image src={TopNews2} alt="TopNews" />
            </CardMedia>
            <CardContent>
              <p className="text-white w-[130px] bg-red-600 px-1  font-bold uppercase underline rounded">
                Ecommerce
              </p>
              <Typography gutterBottom variant="body1" component="div">
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
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate quam ducimus quae iusto quas maxime repellat
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className="my-2">
            <CardMedia>
              <Image src={TopNews} alt="TopNews" />
            </CardMedia>
            <CardContent>
              <p className="text-white w-[130px] bg-red-600 px-1  font-bold uppercase underline rounded">
                Business
              </p>
              <Typography gutterBottom variant="body1" component="div">
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
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate quam ducimus quae iusto quas maxime repellat
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
