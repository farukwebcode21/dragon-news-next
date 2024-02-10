import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CategoryList from "../../components/ui/CategoryList/CategoryList";

const CategoriesPages = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <CategoryList />
        </Grid>
        <Grid item xs={6} md={4}>
          <h1>Category News</h1>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CategoriesPages;
