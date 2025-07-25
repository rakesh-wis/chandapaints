import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import ProductCategory from '../pages/ProductCategory'
import ProductSector from '../pages/ProductSector'
import Clients from '../pages/Clients'
import Certifications from '../pages/Certifications'
// import Contact from '@/pages/Contact'

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/category/:slug" element={<ProductCategory />} />
        <Route path="/sector/:slug" element={<ProductSector />} />
        <Route path="/clients" element={<Clients />} />
         {/* <Route path="/testimonials" element={<Testimonials />} /> */}
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/contact" element={<Contact />} />
  </Routes>
)

export default AppRoutes
