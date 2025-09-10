'use client'

import { Hero } from '@/components/sections/hero'
import { Services } from '@/components/sections/services'
import { Solutions } from '@/components/sections/solutions'
import { Pricing } from '@/components/sections/pricing'
import { Process } from '@/components/sections/process'
import { FAQ } from '@/components/sections/faq'
import { Resources } from '@/components/sections/resources'
import { Contact } from '@/components/sections/contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Solutions />
      <Pricing />
      <Process />
      <FAQ />
      <Resources />
      <Contact />
    </>
  )
}