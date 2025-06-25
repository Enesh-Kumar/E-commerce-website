import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Descripton</div>
            <div className="descriptionbox-nav-box fade">Review (122)</div>

        </div>

        <div className="descriptionbox-description">
            <p>Am e-commerce website is a online platform that facilste buying and selling the products or sercices over the internet. It serves as a virtual marketplace where business and individual showcase their products, interact with customers and conduct transaction without any physical presence. E-commerce website has gained immense popularity due to their assessibility and the global reach they offer.</p>
            <p> E-commerce websit typically displays products or services, a detail description of the images, prices and available varities( eg: sizes, colors).Each product usually has its own relevant information.</p>
        </div>
      
    </div>
  )
}

export default DescriptionBox
