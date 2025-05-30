import React from 'react'
import Header from './Header'
import Navabar from './Navabar'
import Banner from './Banner'
import Sidemenu from './Sidemenu'
import Maindisplay from './Maindisplay'
import Footer from './Footer'
import CreateComponent from './CreateComponent'

const App = () => {
  return (
    <>
     <Header />
     <Navabar />
     <Banner />
     
      <div className='maincontainer'>
        <Sidemenu />
        <Maindisplay />
      </div>

     <Footer />
     <CreateComponent />
    </>

  )
}

export default App