import './App.css';
import styled from 'styled-components';
import Footer from './components/Footer';
import { Box } from '@mui/material';
import MainContent from './components/MainContent';

function App(props) {
  return (
    <AppContainer>
      <MainContent />
      <Footer />
    </AppContainer >
  );
}

export default App;

const AppContainer = styled(Box)`
  min-height:100vh;
  min-width:100vw;
  background-color: #0a192f;

`