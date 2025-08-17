import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Cart from './components/cart/Cart.jsx'
import ContactPage from './components/pages/ContactPage.jsx'
import Footer from './components/pages/Footer.jsx'
import Home from './components/pages/Home.jsx'
import LoginPage from './components/pages/LoginPage.jsx'
import SignUpPage from './components/pages/SignupPage.jsx'
import TermsAndConditions from './components/pages/TermsAndConditions.jsx'
import WorkerDetails from './components/pages/WorkerDetails.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Home></Home>
    <Cart></Cart>
    <Footer></Footer>
    <WorkerDetails></WorkerDetails>
    <LoginPage></LoginPage>
    <SignUpPage></SignUpPage>
    <TermsAndConditions></TermsAndConditions>
    <ContactPage></ContactPage>
  </StrictMode>,
)
