import * as React from 'react'
import { Navbar } from '../src/components/Navbar/Navbar'
import { Landing } from '../src/components/Landing/Landing'
import { AboutMe } from '../src/components/AboutMe/AboutMe'
import { TechIKnow } from '../src/components/TechIKnow/TechIKnow'
import { Experience } from '../src/components/Experience/Experience'
import { Projects } from '../src/components/Projects/Projects'
import { Contact } from '../src/components/Contact/Contact'

export default function Index() {
  return (
    <div>
      <Navbar />
      <Landing />
      <AboutMe />
      <TechIKnow />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}
