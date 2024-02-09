import Grid from "@mui/material/Grid";
import LatestNews from "../components/ui/LatestNews/LatestNews";

export default function Home() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <LatestNews />
        </Grid>
        <Grid item xs={4}>
          <h1>Colume 4</h1>
        </Grid>
      </Grid>
    </>
  );
}
