import React  from 'react'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    // This is a simple Navbar component
    // You can add links, logos, or any other elements you need
    const menuItems = [

    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' },
    { label: 'Blog', path: '/blog' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'Careers', path: '/careers' },
    { label: 'Support', path: '/support' }

    ]

    const navigate=useNavigate();

    const handleNavigation = (path) => {
        // This function will handle navigation when a menu item is clicked
        navigate(path);
    }   


  return (
    <div>
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
        {menuItems.map((item, index) => (
            <li key={index} onClick={() => handleNavigation(item.path)}>
            {item.label}
            </li>
        ))}
        </ul>
    </div>
  )
}

export default Navbar