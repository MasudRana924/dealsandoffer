import React from 'react';
import Banner from './Banner/Banner';
import Fashion from './fashion/Fashion';
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
        </div>
    );
};

export default Home;