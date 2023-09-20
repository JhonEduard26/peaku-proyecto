import { Header } from './components/Header/Header'
import { Home } from './components/Home/Home'
import './App.css'
import { About } from './components/About/About'
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
      </main>
      <Footer />
    </>
  )
}

export default App
