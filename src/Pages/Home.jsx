


import React from 'react'
import Navbar from '../components/Navbar'
import bgImage from '../assets/img/home_bg.png'
import Hero from '../components/Hero'
import AnimatedProfileCard from '../components/AnimatedProfileCard'
import AnimatedStats from '../components/AnimatedStats'
import About from './About'
import Resume from './Resume'
import SkillBars from '../components/SkillBars'
import ImageGallery from '../components/ImageGallery'
import ContactForm from '../components/ContactForm'

function Home() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-cover bg-center flex items-center justify-center" 
           style={{ backgroundImage: `url(${bgImage})` }}>
        
        <div className="flex flex-col md:flex-row gap-24 p-4 w-full max-w-7xl">
          <div className="w-full md:w-1/2  text-white p-6 text-center">
          <Hero/>
          </div>
          <div className="w-full md:w-1/2  text-white p-6 text-center">
          <AnimatedProfileCard/>
          </div>
        </div>

      </div>
      <AnimatedStats/>
      <About/>
      <Resume/>
      <SkillBars/>
      <ImageGallery/>
      <ContactForm/>
    </div>
  )
}

export default Home
