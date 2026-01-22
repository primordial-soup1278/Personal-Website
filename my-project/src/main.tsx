import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Landing from './Landing.tsx'
import Contact from './Contact.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>

    <StrictMode>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </StrictMode>,
  </BrowserRouter>
)
