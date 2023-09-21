import { Header } from './components/Header/Header'
import { Home } from './components/Home/Home'
import { About } from './components/About/About'
import { Footer } from './components/Footer/Footer'
import { CardEmail } from './components/CardEmail/CardEmail'
import { Blog } from './components/Blog/Blog'
import { Testimony } from './components/Testimony/Testimony'
import { Destination } from './components/Destination/Destination'
import { Tour } from './components/Tour/Tour'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Destination />
        <Tour />
        <Testimony />
        <Blog />
        <CardEmail />
      </main>
      <Footer />
    </>
  )
}

export default App
