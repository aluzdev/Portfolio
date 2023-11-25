import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { FullSizeIframe } from "./FullSizeIframe"; // Adjust the path as necessary
import styled from "styled-components";

function App() {
  const [count, setCount] = useState(0);

  const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    gap: 20px;
    max-width: 380px;
    margin: 0 auto;

    @media (min-width: 640px) {
      max-width: 640px;
    }
    @media (min-width: 1035px) {
      max-width: 1035px;
    }
    @media (min-width: 1280px) {
      max-width: 1280px;
    }
  `;

  const Subtitle = styled.h2`
    color: #b396f2;
  `;

  const Description = styled.p`
    color: #7d7fc8;
    font-size: 14px;
    line-height: 17px;
    font-weight: 500;
    letter-spacing: -0.025em;
    display: block;
  `;

  const DescriptionZone = styled.div`
    display: flex;
    flex-direction: column;
    h1,
    h2,
    h3,
    h4,
    p {
      margin: 0;
      padding: 0;
    }
  `;

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>Projects I've worked on</h1>

        <FlexContainer>
          <DescriptionZone>
            <Subtitle>kolors.com.mx</Subtitle>
            <Description>Specific contributon</Description>
          </DescriptionZone>
          <FullSizeIframe src="https://kolors.com.mx/" />
          <Subtitle>Kolors (Business To Business)</Subtitle>
          <FullSizeIframe src="https://kolorsbiz.com.mx/" />
          <Subtitle>Kolors Mobile</Subtitle>
          <FullSizeIframe src="https://kolorsmobile.com.mx/" />
          <Subtitle>Admin</Subtitle>
          <FullSizeIframe src="https://admin.nexbusplay.com/" />
        </FlexContainer>
      </div>
    </>
  );
}

export default App;
