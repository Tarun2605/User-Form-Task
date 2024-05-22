import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box sx={{ 
      position: 'static', 
      bottom: 0, 
      width: '100%', 
      height: '60px', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      backgroundColor: 'white', 
      color: 'black' 
    }}>
      <Typography variant="body1">
        © {new Date().getFullYear()} Tarun Prakash
      </Typography>
      <Link href="https://github.com/Tarun2605" target="_blank" rel="noopener noreferrer">
        <GitHubIcon sx={{ marginLeft: '10px' }} />
      </Link>
      <Link href="https://www.linkedin.com/in/tarun-prakash-6255b3257/" target="_blank" rel="noopener noreferrer">
        <LinkedInIcon sx={{ marginLeft: '10px' }} />
      </Link>
    </Box>
  );
};

export default Footer;