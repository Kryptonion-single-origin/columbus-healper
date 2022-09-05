import "./navbar.css";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import {
  Router,
  Link,
  goBack,
  goTo,
  popToTop
} from "react-chrome-extension-router";
import EVM from "../../page/EVM/EVM"
import ApeBoard from "../../page/EVM/Helper/ApeBoard";
import Home from "../../page/Home/Home"
// const Home = React.lazy(() => import("./page/Home/Home"));
export default function ButtonAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const settings = [
    {
      name: 'EVM',
      component: EVM
    },
    {
      name: 'COSMOS',
      component: EVM
    },
    {
      name: 'Ape Board',
      component: ApeBoard
    }
  ];
  const pages = ['Products', 'Pricing', 'Blog'];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">

              <IconButton
                onClick={handleOpenUserMenu}
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
              // sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>

            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <Link className="custom-link" component={setting.component} props={{ message: "I came from component one!" }}>
                  <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting.name}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Link component={Home} >
            <Typography className="main-title" variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Columbus helper
            </Typography>
          </Link>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
