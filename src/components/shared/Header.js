import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Image from "next/image";
import headerImage from "@/assets/The Dragon News.png";
import Typography from "@mui/material/Typography";
import { showCurrentDate } from '../utils/getCurrentDate';

const Header = () => {
    const currentDate = showCurrentDate();
  return (
    <Box>
      <Container>
        <Image src={headerImage} width={500} height={500} alt="header" />
        <Typography variant="body1" textAlign={"center"} color={"gray"}>
          Journalism Without Fear or Favour
        </Typography>
        <Typography variant="body1" textAlign={"center"} color={"gray"}>
          {currentDate}
        </Typography>
      </Container>
    </Box>
  );
};

export default Header;
