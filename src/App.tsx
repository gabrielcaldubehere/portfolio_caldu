import './App.css';
import Hero from './components/Hero.tsx'
import Skills from './components/Skills.tsx';
import Footer from './components/Footer.tsx';

function App() {
  
  return (
    <>
      <main className='min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-purple-700 m-0'>
        <Hero />
        <Skills />
        <Footer />
      </main>

    </>
  )
}

export default App

