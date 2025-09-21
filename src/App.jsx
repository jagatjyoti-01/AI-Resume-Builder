import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/layouts/Header'
import Hero from './components/layouts/Hero'
import TrustSection from './components/layouts/TrustSection'
import FeaturesSection from './components/layouts/FeaturesSection'
import ResumeTemplates from './components/layouts/ResumeTemplates'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Hero />
      <TrustSection />
      <FeaturesSection />
      <ResumeTemplates />
    </>
  )
}

export default App
