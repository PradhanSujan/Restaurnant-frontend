import React from 'react';

// import Main from '../../layouts/main/Main';
// import Header from '../../layouts/header/Header';
import Hero from '../components/heroSection/Hero';
import About from '../components/about/About';
import Menu from '../components/menu/Menu';
import ChooseFood from '../components/chooseFood/ChooseFood';
import Hall from '../components/meetinghall/hall';
import ClientReview from '../components/clientReview/ClientReview';
import Gallery from '../components/gallery/Gallery';
 const Home = () =>{
    return(
        <div className='main-wrapper'>
        <div className='container'>
        <Hero/>
        <About/>
        <Menu/>
        <ChooseFood />
        <Hall/>
        <ClientReview/>
        <Gallery/>
        </div>
        </div>
            
    )
    
}
export default Home;


