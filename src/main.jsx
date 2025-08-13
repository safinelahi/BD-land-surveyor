import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Cart from './components/cart/Cart.jsx'
import Footer from './components/pages/Footer.jsx'
import Home from './components/pages/Home.jsx'
import WorkerDetails from './components/pages/WorkerDetails.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Home></Home>
    <Cart></Cart>
    <Footer></Footer>
    <WorkerDetails></WorkerDetails>
  </StrictMode>,
)
