import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CategoryList from "../../components/ui/CategoryList/CategoryList";

const CategoryLayout = ({ children }) => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <CategoryList />
        </Grid>
        <Grid item xs={9} md={4}>
          {children}
        </Grid>
      </Grid>
    </Box>
  );
};

export default CategoryLayout;
