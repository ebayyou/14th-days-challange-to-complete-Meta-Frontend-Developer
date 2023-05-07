import { ChakraProvider } from '@chakra-ui/react';
import './style/index.css';
import { AlertProvider } from './context/AlertContext';
import Headers from './components/Header';
import LandingSection from './components/LandingSection';
import ProjectsSection from './components/ProjectSection';
import ContactMeSection from './components/ContactMeSection';
import Footer from './components/Footer';
import Alert from './components/Alert';

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Headers />
          <LandingSection />
          <ProjectsSection />
          <ContactMeSection />
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
