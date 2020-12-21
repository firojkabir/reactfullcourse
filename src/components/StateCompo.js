import React from 'react'

class StateCompo extends React.Component {
    constructor() {
        super()
        this.state = {
            answer: "Off Course"
        }
    }

    render(){
        return(
            <div>
                <h2>Is state really important?</h2>
                <h1>{this.state.answer}</h1>
            </div>
        )
    }
}

export default StateCompo