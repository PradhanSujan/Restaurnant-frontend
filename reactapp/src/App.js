import React from 'react';
import Header from './layouts/header/Header';
import './assets/style/style.scss';
import Route from './routes/App';
import Footer from './layouts/footer/Footer';
import Home from './pages/home/Home';

const App = () =>{
    return(
        <>
            <Header/>
            <Route/>
            {/* <Footer/> */}
        </>
    )
}

export default App;