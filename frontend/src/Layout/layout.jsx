import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Router from '../../src/Router/Router.jsx'
function layout() {
  return (
    <div>
      <Header />
      <main><Router/></main>
          <Footer/>
     </div>
  )
}

export default layout
