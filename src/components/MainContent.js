import React from 'react'

function MainContent() {
    const firstName = "Ahmed"
    const lastName = "Rimon"

    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    const styles = {
        fontSize: 30
    }

    if (hours < 12) {
        timeOfDay = "morning"
        styles.color = "#2dd684"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
        styles.color = "#d69e2d"
    } else {
        timeOfDay = "night"
        styles.color = "#2d68d6"
    }

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

            <h2 style={styles}>Good {timeOfDay}</h2>
        </main>
    )
}

export default MainContent