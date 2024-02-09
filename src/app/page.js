import Grid from "@mui/material/Grid";
import LatestNews from "../components/ui/LatestNews/LatestNews";
import SideBarPages from "../components/ui/SideBar/SideBar";

export default function Home() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <LatestNews />
        </Grid>
        <Grid item xs={4}>
          <SideBarPages />
        </Grid>
      </Grid>
    </>
  );
}
