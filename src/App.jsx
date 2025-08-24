import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home"; 
import About from "./components/pages/About";
import Footer from "./components/pages/Footer";
import GeneralKnowledge from "./components/pages/GeneralKnowledge";
import Surveyor from "./components/pages/Surveyor";
import LoginPage from "./components/pages/LoginPage";
import SignupPage from "./components/pages/SignupPage";


function App() {
  return <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/surveyor" element={<Surveyor />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/knowledge" element={<GeneralKnowledge />}/>
      <Route path="/login"  element={<LoginPage />}/>
      <Route path="/signup"  element={<SignupPage />}/>
    </Routes>
    <Footer />
  </>;
}

export default App;
