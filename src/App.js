import { ThemeProvider } from '@mui/material/styles';
import './App.css';
import Navbar from './Components/Navbar';
import { Container, Typography } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import IframePreview from './Components/IframePreview';
import PageSection from './Components/PageSection';
import MyPfp from './Assets/pfp.jpg'
import ImagePreview from './Components/QuadImagePreview';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container>
        <Navbar pages={PAGES}></Navbar>
        <PageSection height={"700px"} imageUrl={MyPfp}>
          <div className='display-flex align-items-center'>
            <div className='display-flex flex-direction-column' style={{ width:'30vw'}}>
              <Typography variant='h2'>Mumin Hemayed</Typography>
              <Typography variant='subtitle'>I like to make stuff, proficient in anything related to tech. Recognized quick learner, and unique problem solver. A well-rounded individual with excellent work ethic and a natural leader that strives for efficiency and making things better.</Typography>
            </div>
          </div>
        </PageSection>
        <PageSection className={"light-section"} height={"700px"} imageUrl={MyPfp}></PageSection>
            {/* <IframePreview title="Table" url="https://axosbank-dev-sentry.outsystemsenterprise.com/MuminTestApp/table"></IframePreview> */}
            {/* <iframe style={{width:'100%', height:'500px'}} src="https://axosbank-dev-sentry.outsystemsenterprise.com/axos_reactive_lsg"/> */}
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;

const PAGES = [
  { name: "Home", url: "/my-portfolio" },
  { name: "About", url: "/about" }
];

const theme = createTheme({
  palette: {
    primary: {
      main: '#1B1B1B',
      light: '#FFFFFF',
      dark: '#080808',
      contrastText: '#9C9C9C',
    },
    secondary: {
      main: '#FFFFFF',
      light: '#FFFFFF',
      dark: '#1B1B1B',
      contrastText: '#080808',
    },
  },
});
