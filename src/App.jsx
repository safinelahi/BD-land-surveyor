import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home"; 
import SurveyorsDetails from "./components/pages/SurveyorsDetails";
import About from "./components/pages/About";
import Footer from "./components/pages/Footer";
import GeneralKnowledge from "./components/pages/GeneralKnowledge";
function App() {
  return <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/surveyor" element={<SurveyorsDetails />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/knowledge" element={<GeneralKnowledge />}/>
    </Routes>
    <Footer />
  </>;
}

export default App;
