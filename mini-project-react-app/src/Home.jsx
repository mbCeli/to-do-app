import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import './Home.css'

function Home() {

  return (
    <main className='home-page'>
      <Navbar />
      <Footer />
      <Sidebar />
    </main>
  )
}

export default Home
