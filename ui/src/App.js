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
  height:100vh;
  width:100vw;
  // background-color: #000;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
`