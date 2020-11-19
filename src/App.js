import React from 'react';

import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import ToDoApp from './components/ToDoApp'

import './App.css';

function App() {
    return (
        <div className="App">
            {/* <Header />
            <MainContent />
            <Footer /> */}
            <ToDoApp />
        </div>
    );
}

export default App;
