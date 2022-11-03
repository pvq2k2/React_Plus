import React from 'react'
import Branding from '../components/home/Branding'
import Companies from '../components/home/Companies'
import Contact from '../components/home/Contact'
import Custome from '../components/home/Custome'
import Hero from '../components/home/Hero'
import Testimonial from '../components/home/Testimonial'
import Layout from '../components/layout/client'

const Home = () => {
  return (
    <Layout>
        <Hero />
        <Companies />
        <Branding />
        <Custome />
        <Testimonial/>
        <Contact />
    </Layout>
  )
}

export default Home