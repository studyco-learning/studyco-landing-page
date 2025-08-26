import { Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ScrollToHash from "./ScrollToHash";
import Help from "./pages/Help";
import ContactUs from "./pages/ContactUs";



function App() {
  return (
    <>
     <ScrollToHash />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/help" element={<Help />} />
          <Route path="/contact-us" element={<ContactUs />} />


        </Routes>
    
    </>
  );
}

export default App;
