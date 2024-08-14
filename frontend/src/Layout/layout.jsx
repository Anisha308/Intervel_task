import React from 'react'
import Header from '../Components/Header'
import Router from '../../src/Router/Router.jsx'
function layout() {
  return (
    <div>
      <Header />
      <main><Router/></main>
          
     </div>
  )
}

export default layout
