import React from 'react';
import Header from './components/Header/Header';
import Product from "./components/products/Products"
import Tours from "./components/Tours/Tours"
import Courses from "./components/Courses/Courses"
import Club from "./components/Club/Club"
import Contacts from "./components/Contacts/Contacts"

function App() {
    return (
        <div className="App">
            <Header />
            <Product />
            <Tours />
            <Courses />
            <Club />
            <Contacts />
        </div>
    );
}

export default App;