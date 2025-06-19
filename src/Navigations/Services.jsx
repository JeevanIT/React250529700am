import React from 'react'
import { useNavigate } from 'react-router-dom';

import { Routes, Route } from 'react-router-dom';
import WebDevelopment from './Services/WebDevelopment';
import MobileApps from './Services/MobileApps';
import DigitalMarketing from './Services/DigitalMarketing';
import Seo from './Services/Seo';

const Services = () => {

  const servicesList = [
    {name: 'Web Development', path: '/services/web-development' },
    {name: 'Mobile Apps',path: '/services/mobile-apps' },
    {name: 'Digital Marketing',path: '/services/digital-marketing' },
    {name: 'SEO',path: '/services/seo' }
  ];
  const navigate= useNavigate();
  const handleServiceClick = (servicePath) => {
    navigate(servicePath);
  };

  return (
    <div>
        <h1>Services Page</h1>
        <p>Welcome to the services page of our application. Here you can find a list of services we offer.</p>
        <ul>
            {servicesList.map((service, index) => (
                <li key={index} onClick={() => handleServiceClick(service.path)}>
                    {service.name}
                </li>
            ))}
        </ul>
               <Routes>
                    <Route path="web-development" element={<WebDevelopment/>} />
                    <Route path="mobile-apps" element={<MobileApps />} />
                    <Route path="digital-marketing" element={<DigitalMarketing/>} />
                    <Route path="seo" element={<Seo />} />
                </Routes>
    </div>
  )
}

export default Services