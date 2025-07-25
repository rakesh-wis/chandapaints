import Faq from "../components/Faq"
import Testimonials from "../components/Testimonials"
import PromotionalBanner from '../components/PromotionalBanner';
import AboutUs from '../components/AboutUs';
import Products from '../components/Products';
import Clients from '../components/Clients';
import Certifications from '../components/Certifications';
import WhyChooseChandaPaints from '../components/WhyChoose';

const Home = () => {
  return (
    <div>
      <PromotionalBanner />
      <AboutUs />
      <WhyChooseChandaPaints />
      <Products />
      <Clients />
      <Certifications />
      <Testimonials />
      <Faq />
    </div>
  )
}
export default Home
