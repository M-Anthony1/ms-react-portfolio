import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <main className="bg-white text-gray-900 ">
        <Hero />
        <Portfolio />
        <About />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
