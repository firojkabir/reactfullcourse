import React from 'react'

import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'

import ToDoApp from './components/ToDoApp'

import ContactCard from './components/ContactCard'

import Joke from './components/Joke'
import jokesData from './components/jokesData'

import ClassCompo from './components/ClassCompo'

import './App.css';

function App() {
    const jokesComponent = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)

    
    return (
        <div className="App">
            {/* <Header />
            <MainContent />
            <Footer /> */}
            {/* <ToDoApp /> */}
            {/* <ContactCard 
                contact={{name:"Mr. Whiskerson", imgUrl:"http://placekitten.com/300/200", phone:"(212) 555-1234", email:"mr.whiskaz@catnap.meow" }}
            />
            <ContactCard 
                contact={{name:"Fluffykins", imgUrl:"http://placekitten.com/400/200", phone:"(212) 555-2345", email:"fluff@me.com" }}
                
            />
            <ContactCard 
                contact={{name:"Destroyer", imgUrl:"http://placekitten.com/200/300", phone:"(212) 555-4567", email:"ofworlds@yahoo.com"}}
                 
            /> */}
            {/* {jokesComponent} */}
            <ClassCompo />
        </div>
    );
}

export default App;
