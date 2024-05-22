import logo from './logo.svg';
import './App.css';
import { Box, CssBaseline, Modal, Rating, ThemeProvider, Typography, createTheme } from '@mui/material';
import NavBar from './Components/NavBar';
import UserForm from './Components/UserForm';
import Footer from './Components/Footer';
import { useContext, useEffect } from 'react';
import { getAllFeedback, welcomeUser } from './Api/ApiUtility';
import { AppContext } from './Context/Appcontext';

const theme= createTheme({
  spacing: 4,
});

function App() {
  const {feedback, setFeedback, modalOpen, setModalOpen} = useContext(AppContext)
   useEffect(() => {
    const fetcher = async () => {
      try {
        const response = await getAllFeedback();
        setFeedback(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetcher();
  }
  , []);
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{
      position: 'relative',
    }}>
      <CssBaseline />
      <NavBar />
      <UserForm />
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 700,
          height: 700,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}>
          {
            feedback && feedback.map((item, index) => {
              return (
                <Box key={index} sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 2,
                  border: 1,
                  borderColor: 'divider',
                  borderRadius: 2,
                  marginBottom: 2,
                }}>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="body1">{item.email}</Typography>
                  <Typography variant="body1">{item.feedback}</Typography>
                  <Rating name="read-only" value={item.rating} readOnly />
                </Box>
              )
            }
            )
          }
        </Box>
      </Modal>
      <Footer />
    </Box>
    </ThemeProvider>
  );
}

export default App;
