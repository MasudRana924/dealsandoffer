import React from 'react';
import { Container } from 'react-bootstrap';
import './Menu.css'
import img from '../../../Imges/apex.jpg'
import img2 from '../../../Imges/bata.png'
import img3 from '../../../Imges/Lotto-Logo.jpg'
import img4 from '../../../Imges/yellow.png'
import img5 from '../../../Imges/Zara-Emblem.jpg'
import img6 from '../../../Imges/Richman.png'
import img7 from '../../../Imges/easy.png'

const Menu = () => {
    return (
      <Container fluid className="mt-5">
          <h2 className="text-start fs-5">FEATURED BRAND </h2>
          <div className="menu-section mt-3">
              <div className="menu-div">
                  <img src={img} alt="" className="menu-img"/>
                  
              </div>
              <div  className="menu-div">
                  <img src={img2} alt="" className="menu-img"/>
                 
              </div>
              <div  className="menu-div">
                  <img src={img3} alt="" className="menu-img"/>
                  
              </div>
              <div  className="menu-div">
                  <img src={img4} alt="" className="menu-img"/>
                  
              </div>
              <div  className="menu-div">
                  <img src={img5} alt="" className="menu-img"/>
                 
              </div>
              <div  className="menu-div">
                  <img src={img6} alt="" className="menu-img"/>
                 
              </div>
              <div  className="menu-div">
                  <img src={img7} alt="" className="menu-img"/>
                
              </div>

          </div>

      </Container>
    );
};

export default Menu;