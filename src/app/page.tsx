import React from 'react'
import { Home } from './_components/home'
import { Header } from './_components/header'
import { LatestDrop } from './_components/latest-drop'
import { Info } from './_components/info'
import { VideoSection } from './_components/video-section'
import { TeamSection } from './_components/team-section'
import { Footer } from './_components/footer'

const page = () => {
  return (
    <div className='h-full w-full'>
      <Header />
      <Home />
      <LatestDrop />
      <Info />
      <VideoSection />
      <TeamSection />
      <Footer />
    </div>
  )
}

export default page