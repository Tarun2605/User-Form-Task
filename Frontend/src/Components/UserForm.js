// src/components/UserForm.js
import React, { useState } from 'react';
import { Box, Button, Typography, Rating, Grid, Container } from '@mui/material';

import styled, { ThemeProvider, keyframes } from 'styled-components';
import { createTheme } from '@mui/material/styles';
import api, { postFeedback } from '../Api/ApiUtility';

const theme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      main: '#1976d2',
    },
    error: {
      main: '#f44336',
      dark: '#d32f2f',
    },
    divider: '#f0f0f0',
  },
  shape: {
    borderRadius: 8,
  },

});

const gradient = keyframes`
  0% {background: red;}
  25% {background: yellow;}
  50% {background: blue;}
  75% {background: green;}
  100% {background: red;}
`;

const AnimatedContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${gradient} 30s linear infinite;
  background: red;
`;


const StyledContainer = styled(Container)(({ theme }) => ({
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  // left: '30%',
  padding: '2rem',
  borderRadius: '10px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  backgroundColor: 'white',
  zIndex: 3,
}));

const StyledTextField = styled('input')(({ theme, error }) => ({
  width: '100%',
  padding: '1rem',
  margin: '1rem 0',
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${error ? theme.palette.error.main : theme.palette.divider}`,
  fontSize: '1rem',
  outline: 'none',
  '&:focus': {
    borderColor: error ? theme.palette.error.dark : theme.palette.primary.main,
  },
}));

const StyledTextArea = styled('textarea')(({ theme, error }) => ({
  width: '100%',
  padding: theme.spacing(1.5),
  margin: theme.spacing(1, 0),
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${error ? theme.palette.error.main : theme.palette.divider}`,
  fontSize: '1rem',
  resize: 'vertical',
  outline: 'none',
  '&:focus': {
    borderColor: error ? theme.palette.error.dark : theme.palette.primary.main,
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  width: '100%',
  padding: theme.spacing(1.5),
}));

const isValidEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
  return re.test(String(email).toLowerCase());
};

const UserForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    feedback: '',
    rating: 0,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRatingChange = (event, newValue) => {
    setFormData({
      ...formData,
      rating: newValue,
    });
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.email = !formData.email ? "Email is required" : !isValidEmail(formData.email) ? "Email is not valid" : "";
    tempErrors.name = !formData.name ? "Name is required" : "";
    tempErrors.feedback = !formData.feedback ? "Feedback is required" : "";
    tempErrors.rating = formData.rating === 0 ? "Rating is required" : "";

    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        console.log('Form data:', formData);
        const response= await postFeedback(formData);
        console.log('Response:', response);
        if (response.status === 200) {
          alert('Feedback submitted successfully!');
          setFormData({
            email: '',
            name: '',
            feedback: '',
            rating: 0,
          });
        }
        // Handle form submission logic here
        
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
    <Box sx={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      zIndex: 0
    }}>
    <AnimatedContainer>
    <StyledContainer maxWidth="sm">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          zIndex: 10,
        }}
      >
        <Typography variant="h6" gutterBottom>
          User Feedback Form
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <StyledTextField
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
            />
            {errors.email && <Typography color="error">{errors.email}</Typography>}
          </Grid>
          <Grid item xs={12}>
            <StyledTextField
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
            />
            {errors.name && <Typography color="error">{errors.name}</Typography>}
          </Grid>
          <Grid item xs={12}>
            <StyledTextArea
              name="feedback"
              placeholder="Feedback"
              value={formData.feedback}
              onChange={handleChange}
              error={!!errors.feedback}
              rows={4}
            />
            {errors.feedback && <Typography color="error">{errors.feedback}</Typography>}
          </Grid>
          <Grid item xs={12}>
            <Typography component="legend">Rating</Typography>
            <Rating
              name="rating"
              value={formData.rating}
              onChange={handleRatingChange}
              error={!!errors.rating}
            />
            {errors.rating && <Typography color="error">{errors.rating}</Typography>}
          </Grid>
          <Grid item xs={12}>
            <StyledButton type="submit" variant="contained" color="primary">
              Submit
            </StyledButton>
          </Grid>
        </Grid>
      </Box>
    </StyledContainer>
    </AnimatedContainer>
    </Box>
    </ThemeProvider>
  );
};

export default UserForm;
