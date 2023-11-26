import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { FullSizeIframe } from "./FullSizeIframe"; // Adjust the path as necessary
import styled from "styled-components";

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

const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Subtitle = styled.h2`
  color: #b396f2;

  @media (min-width: 640px) {
    font-size: 32px;
  }
`;

const Title = styled.h1`
  color: #e2e2e2;
  font-size: 31px;

  @media (min-width: 640px) {
    font-size: 48px;
  }
`;

const Description = styled.p`
  color: #7d7fc8;
  font-size: 14px;
  line-height: 17px;
  font-weight: 500;
  display: block;
  text-align: center;
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
  padding: 10px;
`;

const Footer = styled.footer`
  padding: 30px;
`;

function App() {
  return (
    <>
      <SpaceBetween>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </SpaceBetween>
      <Title>Projects I've worked on</Title>
      <FlexContainer>
        <DescriptionZone>
          <Subtitle>kolors.com.mx</Subtitle>
          <Description>
            Joining the Kolors team marked the beginning of an exciting chapter
            in my career, where I had the opportunity to spearhead the
            implementation of the company's current design aesthetic.
          </Description>
        </DescriptionZone>
        <FullSizeIframe src="https://kolors.com.mx/" />
        <DescriptionZone>
          <Subtitle>Kolors (Business To Business)</Subtitle>
          <Description>
            This was my first project when joining the company. I was asked to
            create this website from scratch using only a Figma design, and it
            turned out looking great!
          </Description>
        </DescriptionZone>
        <FullSizeIframe src="https://kolorsbiz.com.mx/" />
        <DescriptionZone>
          <Subtitle>Kolors Mobile</Subtitle>
          <Description>
            I was responsible for adding new sections, debugging API calls and
            fixing visual errors, adding form validations and showing
            human-readable errors.
          </Description>
        </DescriptionZone>
        <FullSizeIframe src="https://kolorsmobile.com.mx/" />
      </FlexContainer>

      <Footer>
        <a
          href="https://www.flaticon.com/free-icons/rainbow"
          title="rainbow icons"
        >
          Rainbow icons created by Freepik - Flaticon
        </a>
      </Footer>
    </>
  );
}

export default App;
