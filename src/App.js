import './App.css';
import Hero from './component/Hero/Hero';
import Navbar from './component/Navbar/Navbar';
import About from './component/About/About';
import Services from './component/Services/Services';
import MyWork from './component/MyWork/MyWork';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import ErrorBoundary from './component/ErrorBoundary/ErrorBoundary';
import UserTracker from './component/UserTracker';

function App() {
  return (
    <div className="App">
      <UserTracker />
      
      <ErrorBoundary>
        <Navbar />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero />
      </ErrorBoundary>

      <ErrorBoundary>
        <About />
      </ErrorBoundary>

      <ErrorBoundary>
        <Services />
      </ErrorBoundary>

      <ErrorBoundary>
        <MyWork />
      </ErrorBoundary>

      <ErrorBoundary>
        <Contact />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
    </div>
  );
}

export default App;
