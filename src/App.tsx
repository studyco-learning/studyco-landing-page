import { Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ScrollToHash from "./ScrollToHash";

function App() {
  return (
    <>
     <ScrollToHash />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
    
    </>
  );
}

export default App;
