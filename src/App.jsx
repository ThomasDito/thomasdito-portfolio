import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import HomePorto from './pages/HomePorto.jsx'
import PreLoader from './components/PreLoader.jsx'
import NotFound from './pages/NotFound.jsx';

const App = () => {
  // init AOS
  useEffect(() => {
    AOS.init()
  }, [])

  // refresh setelah preloader hilang
  useEffect(() => {
    const t = setTimeout(() => {
      AOS.refreshHard() //hitung ulang posisi element
    }, 1100)
    return () => {
      clearTimeout(t)
    } //cleanup
  }, [])

  return(
    <Routes>
      <Route path='/' element={
        <div>
          <PreLoader />
          <HomePorto />
        </div>
      } />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App