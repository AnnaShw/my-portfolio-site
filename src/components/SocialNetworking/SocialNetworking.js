import BottomNavigation from "@mui/material/BottomNavigation";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Button } from "@mui/material";

export default function SocialNetworking() {
  return (
    <BottomNavigation sx={{ width: "all" }}>
      <Button>
        <a href="https://www.linkedin.com/in/anna-shveynfurt/">
          <LinkedInIcon />
        </a>
      </Button>
      <Button href="https://github.com/AnnaShw?tab=repositories">
        <GitHubIcon />
      </Button>
      <Button href="https://www.facebook.com/anna.rabinovich.14">
        <FacebookIcon />
      </Button>
    </BottomNavigation>
  );
}
