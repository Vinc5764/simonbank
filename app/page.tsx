import CallToAction from '@/components/CallToAction'
import Footer from '@/components/Footer'
import HeroSection from '@/components/Hero'
import Navbar from '@/components/NavBar'
import LatestNews from '@/components/News'
import OurProjects from '@/components/OurProjects'
import CompanyOverview from '@/components/Overview'
import Services from '@/components/Services'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CompanyOverview />
      <OurProjects />
      <Services />
      <CallToAction />
      <LatestNews />
      <Footer/>
    </div>
  )
}

export default page