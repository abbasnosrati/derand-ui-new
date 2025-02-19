import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import TwitterIcon from "../../Icons/twitter.svg";
import DiscordIcon from "../../Icons/discord.svg";
import MediumIcon from "../../Icons/medium.svg";

function DappNavbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const socialMediaIcons = [
    {
      icon: <img src={DiscordIcon} alt="Discord" width={24} height={24} />,
      name: "Discord",
      link: "https://discord.gg/EwEXrN7N",
    },
    {
      icon: <img src={MediumIcon} alt="Medium" width={24} height={24} />,
      name: "Medium",
      link: "https://medium.com/@DeRand_dev",
    },
    {
      icon: (
        <img
          src={TwitterIcon}
          alt="Twitter"
          style={{
            width: 24,
            height: 24,
            backgroundColor: isMobile ? "black" : "transparent",
            borderRadius: "20px",
          }}
        />
      ),
      name: "Twitter",
      link: "https://twitter.com/DeRand_dev",
    },
    {
      icon: <GitHubIcon style={{ width: 24, height: 24 }} />,
      name: "GitHub",
      link: "https://github.com/derand-protocol/",
    },
  ];

  return (
    <AppBar
      position="absolute"
      sx={{
        background: "transparent",
        boxShadow: "none",
        left: 0,
        right: 0,
        width: "100vw",
        overflowX: "hidden",
        zIndex: 26,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
            <Link to="/">
              <img
                src="/assets/logo.png"
                alt="DeRand Logo"
                style={{
                  height: isMobile ? "20px" : "35px",
                  paddingLeft: isMobile ? "8px" : "45px",
                  paddingTop: isMobile ? "0" : "20px",
                }}
              />
            </Link>
          </Box>
          {isMobile ? (
            <>
              <IconButton color="inherit" onClick={handleOpenNavMenu}>
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorElNav}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                {socialMediaIcons.map((item, index) => (
                  <MenuItem key={index} onClick={handleCloseNavMenu}>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        color: "inherit",
                        textDecoration: "none",
                      }}
                    >
                      {item.icon}
                      <Typography>{item.name}</Typography>
                    </a>
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                paddingRight: "40px",
              }}
            >
              {socialMediaIcons.map((item, index) => (
                <Tooltip title={item.name} key={index}>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      <IconButton color="inherit" sx={{ mx: "1" }}>
                        {item.icon}
                      </IconButton>
                    </a>
                  ) : (
                    <IconButton color="inherit" sx={{ mx: 1 }}>
                      {item.icon}
                    </IconButton>
                  )}
                </Tooltip>
              ))}
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default DappNavbar;
