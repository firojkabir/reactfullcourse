import React from 'react'

function MainContent() {
    const firstName = "Ahmed"
    const lastName = "Rimon"

    return(
        <main className="content">
            <h1>Hello, {firstName + " " + lastName}</h1>
            {/* <h1>Hello, {`${firstName} ${lastName}`}</h1> */}
            <p>I'm a single nice dev guy. Looking for internship for my master's degree.</p>
            <ol>
                <li>Salzburg</li>
                <li>Santorini</li>
                <li>Ibiza</li>
            </ol>
        </main>
    )
}

export default MainContent