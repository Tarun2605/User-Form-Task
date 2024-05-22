// src/components/Navbar.js
import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import { AppContext } from '../Context/Appcontext';

const Navbar = () => {
  const {modalOpen, setModalOpen} = useContext(AppContext);
  return (
    <AppBar position="static" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <LocalPizzaIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Pizzomio's
        </Typography>
        <Button color="inherit" onClick={()=>{
          setModalOpen(true);
        }}>Click me</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
