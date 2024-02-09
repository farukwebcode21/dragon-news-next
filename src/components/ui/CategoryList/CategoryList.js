import React from "react";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { getAllCategories } from "../../utils/getAllCategories";
import Link from "next/link";

const CategoryList = async () => {
  const { data: allCategory } = await getAllCategories();
  console.log(allCategory);
  return (
    <Box className="py-3">
      <Divider />
      <Stack rowGap={1}>
        {allCategory.map((category) => (
          <Button variant="outlined" key={category.id}>
            <Link href={category.title}>{category.title}</Link>
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

export default CategoryList;
