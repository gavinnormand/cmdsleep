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
import ScrollToTop from "./components/scrollToTop";

import PalakkumarPatel from "./pages/sleep-doctors/palakkumar-patel";
import KevinLaw from "./pages/sleep-doctors/kevin-law";
import HatimYoussef from "./pages/sleep-doctors/hatim-youssef";
import JasmeetBajaj from "./pages/sleep-doctors/jasmeet-bajaj";
import PeterARicketti from "./pages/sleep-doctors/peter-a-ricketti";
import FareehaHafeez from "./pages/sleep-doctors/fareeha-hafeez";
import AshganElshinawy from "./pages/sleep-doctors/ashgan-elshinawy";
import Treatments from "./pages/treatments";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Nav />
        <div className="flex flex-1 flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/patient-portal" element={<PatientPortal />} />
            <Route path="/services" element={<Services />} />
            <Route path="/sleep-disorders" element={<SleepDisorders />} />
            <Route path="/treatments" element={<Treatments />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/sleep-doctors" element={<SleepDoctors />} />

            {/* Sleep Doctor Pages*/}
            <Route
              path="/sleep-doctors/palakkumar-patel"
              element={<PalakkumarPatel />}
            />
            <Route path="/sleep-doctors/kevin-law" element={<KevinLaw />} />
            <Route
              path="/sleep-doctors/hatim-youssef"
              element={<HatimYoussef />}
            />
            <Route
              path="/sleep-doctors/jasmeet-bajaj"
              element={<JasmeetBajaj />}
            />
            <Route
              path="/sleep-doctors/pater-a-ricketti"
              element={<PeterARicketti />}
            />
            <Route
              path="/sleep-doctors/fareeha-hafeez"
              element={<FareehaHafeez />}
            />
            <Route
              path="/sleep-doctors/ashgan-elshinawy"
              element={<AshganElshinawy />}
            />

            <Route path="/contact" element={<Contact />} />
            <Route path="/directions" element={<Directions />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
