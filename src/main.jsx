import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Cart from "./components/cart/Cart.jsx";
import About from "./components/pages/About.jsx";
import ContactPage from "./components/pages/ContactPage.jsx";
import Footer from "./components/pages/Footer.jsx";
import Home from "./components/pages/Home.jsx";
import LoginPage from "./components/pages/LoginPage.jsx";
import SignUpPage from "./components/pages/SignupPage.jsx";
import TermsAndConditions from "./components/pages/TermsAndConditions.jsx";


import LandDocumentGuide from "./components/GeneralKnowledgePages/LandDocumentGuide.jsx";
import GeneralKnowledge from "./components/pages/GeneralKnowledge.jsx";
import SurveyorsDetails from "./components/pages/SurveyorsDetails.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Home></Home>
    <Cart></Cart>
    <Footer></Footer>
    <SurveyorsDetails></SurveyorsDetails>
    <About></About>
    <ContactPage></ContactPage>
    <TermsAndConditions></TermsAndConditions>
    <LoginPage></LoginPage>
    <SignUpPage></SignUpPage>
    <GeneralKnowledge></GeneralKnowledge>
    <LandDocumentGuide></LandDocumentGuide>
    
  </StrictMode>
);
