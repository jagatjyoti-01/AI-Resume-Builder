import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/layouts/Header'
import Hero from './components/layouts/Hero'
import TrustSection from './components/layouts/TrustSection'
import FeaturesSection from './components/layouts/FeaturesSection'
import ResumeTemplates from './components/layouts/ResumeTemplates'
import ResumeSteps from './components/layouts/ResumeSteps'
import Footer from './components/layouts/Footer'
import AuthCard from './pages/Authpage'
import ResumeForm from './pages/ResumeForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Header/>
      <Hero />
      <TrustSection />
      <FeaturesSection />
      <ResumeTemplates />
      <ResumeSteps />
      
      <Footer/> */}

      {/* <AuthCard /> */}

      <ResumeForm />
    </>
  )
}

export default App
