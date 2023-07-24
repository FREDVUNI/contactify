import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import AddContact from '../components/AddContact'
import Contacts from '../components/Contacts'

const Home = () => {
  return (
     <>
      <Header />
      <Hero />
      <div className="container"> 
        <AddContact />
        <Contacts />
      </div>
      <Footer />
    </>
  )
}

export default Home