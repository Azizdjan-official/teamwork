import React from 'react'
import Header from './Header'
import Section from './Section'
import Bestseller from './Bestseller'
import EthicalBusiness from './EthicalBusiness'
import Blogs from './Blogs';
import Help from './Help';
import Instagram from './Instagram';
import Footer from './Footer';

const Homepage = () => {
  return (
    <div>
      <Header/>
      <Section/>
      <Bestseller/>
      <EthicalBusiness/>
      <Blogs/>
      <Help/>
      <Instagram/>
      <Footer/>
    </div>
  )
}

export default Homepage
