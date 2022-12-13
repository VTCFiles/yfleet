import Home from "./pages/Home/Home";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from "./pages/About/About";
import Offers from "./pages/Offers/Offers";
import Career from "./pages/Career/Career";
import Blog from "./pages/Blog/Blog";
import Article from "./pages/Blog/Article";
import Admin from "./pages/admin/Admin";
import Contact from "./pages/Contact/Contact";
import Drivers from "./pages/admin/Drivers";
import AdminCareer from "./pages/admin/AdminCareer";
import AddDriverModal from "./components/AddDriverModal";
import CareerInfo from "./pages/Career/CareerInfo";
import PlanModal from "./components/PlanModal";
import BookAppointmentModal from "./components/BookAppointmentModel";

function App() {
  return (
    <div>
      <AddDriverModal />
      <PlanModal />
      <BookAppointmentModal />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <Home />} />
          <Route path="/a-propos" element={ <About />} />
          <Route path="/offres" element={ <Offers />} />
          <Route path="/carrieres" element={ <Career />} />
          <Route path="/carrieres/:id" element={ <CareerInfo />} />
          <Route path="/blog" element={ <Blog />} />
          <Route path="/article" element={ <Article />} />
          <Route path="/contact" element={ <Contact />} />

          {/* Admin */}
          <Route path="/admin" element={ <Admin />} />
          <Route path="/admin/chauffeur" element={ <Drivers />} />
          <Route path="/admin/products" element={ <AdminCareer />} />

        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
