import './App.css';
import styled from 'styled-components';
import resource from "./resources/resource_en.json"
import Typography from '@mui/material/Typography';

function App() {
  return (
    <AppContainer>
      <Typography color={"white"} variant='h1'>{resource["IDS_COMING_SOON"]}</Typography>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  height:100vh;
  width:100vw;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`
