import './App.css';
import styled from 'styled-components';
import resource from "./resources/resource_en.json"
import Typography from '@mui/material/Typography';
import Footer from './components/Footer';
import { Box } from '@mui/material';

function App(props) {
  return (
    <AppContainer>
      <SampleText variant='h1'>{resource["IDS_COMING_SOON"]}</SampleText>
      <Footer />
    </AppContainer >
  );
}

export default App;

const AppContainer = styled(Box)`
  height:100vh;
  width:100vw;
  background-color: #000;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
`

const SampleText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main
}))
