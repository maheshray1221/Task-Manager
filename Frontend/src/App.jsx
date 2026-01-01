import Footer from './pages/footer'
import Header from './pages/header'
import LandingPage from './pages/landingPage'

function App() {

  return (
    <>
      <div className='min-h-screen flex flex-col'>
        <Header />
        <LandingPage />
        <Footer />
      </div>

    </>
  )
}

export default App
