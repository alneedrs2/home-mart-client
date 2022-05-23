import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from './Banner/Banner';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import Divider from './Divider/Divider';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Divider></Divider>
            <BusinessSummary></BusinessSummary>
            <Footer></Footer>
        </div>
    );
};

export default Home;