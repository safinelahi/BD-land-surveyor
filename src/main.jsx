import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './components/pages/Home.jsx'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Home></Home>
    {/* <Cart></Cart>
    <Footer></Footer>
    <WorkerDetails></WorkerDetails>
    <LoginPage></LoginPage>
    <SignUpPage></SignUpPage>
    <TermsAndConditions></TermsAndConditions>
    <ContactPage></ContactPage>
    <About></About> */}
  </StrictMode>,
)
