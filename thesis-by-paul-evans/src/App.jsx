import styled from "styled-components";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ScrollButton from "./components/ScrollButton/ScrollButton";

const GridContainer = styled.div`
  min-height: 100%;
  max-width: 100vw;
`;

const MainContainer = styled.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-items: center;
  justify-content: space-evenly;
`;

function App() {
  return (
    <GridContainer>
      <Navbar />

      <MainContainer>
        <Home />
      </MainContainer>
      <ScrollButton />
    </GridContainer>
  );
}

export default App;
