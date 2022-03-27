import React from 'react';
import Banner from './Banner/Banner';
import ElectricMenu from './electronics/ElectricMenu';
import Fashion from './fashion/Fashion';
import Grocery from './grocery/Grocery';
import Menu from './menu/Menu';
import Offer from './offer/Offer';
import Shoes from './shoes/Shoes';



const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Menu></Menu>
           <Offer></Offer>
           <Shoes></Shoes>
          <Fashion></Fashion>
          <Grocery></Grocery>
         <ElectricMenu></ElectricMenu>
        </div>
    );
};

export default Home;