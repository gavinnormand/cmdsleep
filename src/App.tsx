import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./pages/home";
import SleepDoctors from "./pages/sleepDoctors";
import Services from "./pages/services";
import SleepDisorders from "./pages/sleepDisorders";
import PatientPortal from "./pages/patientPortal";
import Forms from "./pages/forms";
import Contact from "./pages/contact";
import Directions from "./pages/directions";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sleep-doctors" element={<SleepDoctors />} />
        <Route path="/services" element={<Services />} />
        <Route path="/sleep-disorders" element={<SleepDisorders />} />
        <Route path="/patient-portal" element={<PatientPortal />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/directions" element={<Directions />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
