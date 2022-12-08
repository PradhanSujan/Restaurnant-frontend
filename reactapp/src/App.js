import React from 'react';
import Header from './layouts/header/Header';
import './assets/style/style.scss';
import Route from './routes/App';
import Main from './layouts/main/Main'


const App = () =>{
    return(
        <>
            <Header/>
            <Main/>
            <Route/>

        </>
    )
}

export default App;