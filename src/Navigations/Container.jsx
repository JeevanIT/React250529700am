import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Services from './Services'
import AxiosApi from '../UseEffect/AxiosApi'
import FetchApi from '../UseEffect/FetchApi'
import WebDevelopment from './Services/WebDevelopment'
import MobileApps from './Services/MobileApps'
import DigitalMarketing from './Services/DigitalMarketing'
import Seo from './Services/Seo'

const Container = () => {
  return (
    <div>
      
        <article>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />

                <Route path="/services" element={<Services />}>
                    <Route path="/services/web-development" element={<WebDevelopment/>} />
                    <Route path="/services/mobile-apps" element={<MobileApps />} />
                    <Route path="/services/digital-marketing" element={<DigitalMarketing/>} />
                    <Route path="/services/seo" element={<Seo />} /> 
                </Route>

                <Route path="/contact" element={<div>Contact Page</div>} /> 
                <Route path="/blog" element={<div>Blog Page</div>} />
                <Route path="/portfolio" element={<FetchApi />} />
                <Route path="/faq" element={<div>FAQ Page</div>} />
                <Route path="/testimonials" element={<AxiosApi />}/>
                <Route path="/careers" element={<div>Careers Page</div>} />
                <Route path="/support" element={<div>Support Page</div>} />
            </Routes>

        </article>
    </div>
  )
}

export default Container