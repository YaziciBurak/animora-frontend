import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/common/ScrollToTop'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import SeriesDetail from './pages/SeriesDetail'
import SeriesOverview from './pages/SeriesOverview'
import NewEpisodesPage from './pages/NewEpisodesPage'
import ContactPage from './pages/ContactPage'
import Footer from './components/Footer'
import PopularSeriesPage from './pages/PopularSeriesPage'
import NotFound from './pages/errors/NotFound'

function App() {
  
  return ( 
      <Router>
        <ScrollToTop/>
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen text-white">
          <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/series/:id" element={<SeriesDetail/>} />
          <Route path="/series/:id/overview" element={<SeriesOverview />} />
          <Route path="/new-episodes" element={<NewEpisodesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/popular-series" element={<PopularSeriesPage />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer />
        </div>
        
      </Router>
    
  )
}

export default App
