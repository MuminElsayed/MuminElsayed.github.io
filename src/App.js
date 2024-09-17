import React, { useRef } from "react";
import { ThemeProvider } from "@mui/material/styles";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Container, Typography, useForkRef } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import IframePreview from "./Components/IframePreview";
import PageSection from "./Components/PageSection";
import MyPfp from "./Assets/pfp.jpg";
import ImagePreview from "./Components/QuadImagePreview";
import userEvent from "@testing-library/user-event";
import GetInTouch from "./Components/GetInTouch";

function App() {
  const homeRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  const PAGES = [
    { name: "Home", ref: homeRef },
    { name: "My Work", ref: workRef },
    { name: "Contact", ref: contactRef },
  ];

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar pages={PAGES}></Navbar>
        <PageSection ref={homeRef}>
          <Container>
            <div className="display-flex align-items-center justify-content-center gap-xxl">
              <div
                className="display-flex flex-direction-column"
                style={{ width: "30vw" }}
              >
                <Typography variant="h2">Mumin Hemayed</Typography>
                <Typography variant="subtitle">
                  I like to make stuff, proficient in anything related to tech.
                  Recognized quick learner, and unique problem solver. A
                  well-rounded individual with excellent work ethic and a
                  natural leader that strives for efficiency and making things
                  better.
                </Typography>
              </div>
              <ImagePreview
                imageUrl1={MyPfp}
                imageUrl2={MyPfp}
                imageUrl3={MyPfp}
                imageUrl4={MyPfp}
              />
            </div>
          </Container>
        </PageSection>
        <ThemeProvider theme={lightTheme}>
          <PageSection ref={workRef} className={"light-section"}>
            <Container>
              <IframePreview
                title="Table"
                description={
                  "A table that supports drag and drop, tree grid, bulk/single select, column toggle & reordering, resizing, sorting, search, filtering, pagination. Built from scratch using the Outsystems framework based on React."
                }
                url={
                  "https://axosbank-dev-sentry.outsystemsenterprise.com/MuminTestApp/table"
                }
              ></IframePreview>
            </Container>
          </PageSection>
        </ThemeProvider>
        <ThemeProvider theme={lightTheme}>
          <PageSection className={"light-section"}>
            <Container>
              <IframePreview
                title="More Work Added Soon!"
                description={
                  "I will be adding more custom UI elements, snippets of my .NET projects, and highlights of games, all developed by yours truly."
                }
              ></IframePreview>
            </Container>
          </PageSection>
        </ThemeProvider>
        <PageSection
          ref={contactRef}
          className="display-flex flex-direction column align-items-center"
        >
          <Container>
            <GetInTouch></GetInTouch>
          </Container>
        </PageSection>
      </ThemeProvider>
    </div>
  );
}

export default App;

const theme = createTheme({
  palette: {
    primary: {
      main: "#1B1B1B",
      light: "#FFFFFF",
      dark: "#080808",
      contrastText: "#9C9C9C",
    },
    secondary: {
      main: "#FFFFFF",
      light: "#FFFFFF",
      dark: "#1B1B1B",
      contrastText: "#080808",
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FFFFFF", // Light background
      light: "#F5F5F5", // Slightly darker light color
      dark: "#CCCCCC", // Darker shade for contrast
      contrastText: "#1B1B1B", // Dark text for readability
    },
    secondary: {
      main: "#1B1B1B", // Darker secondary color
      light: "#333333", // Slightly lighter dark color
      dark: "#080808", // Darkest shade
      contrastText: "#FFFFFF", // Light text for readability
    },
  },
  typography: {
    h2: {
      color: "#1B1B1B", // Dark text for headings
    },
    subtitle: {
      color: "#333333", // Slightly lighter dark text for subtitles
    },
    h4: {
      color: "#1B1B1B", // Dark text for headings
    },
  },
});
