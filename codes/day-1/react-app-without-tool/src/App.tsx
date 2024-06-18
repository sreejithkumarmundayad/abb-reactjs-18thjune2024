/*
const App = () => {
    const styleObj = {
        backgroundColor: 'burlywood',
        fontFamily: 'consolas'
    }
    const message = 'Welcome to React JS'
    const messageNext = 'This is about components'
    const headerElement = (
        <h2 id="mainHeader" style={styleObj} >
            <span>{message} </span>
            <span> {messageNext} </span>
        </h2>
    )
    return headerElement
}
*/

import { Component, ReactNode } from "react";

class App extends Component {

    state: Readonly<{}> = {
        x: 0,
        name: 'joydip'
    }

    render(): ReactNode {
        const styleObj = {
            backgroundColor: 'burlywood',
            fontFamily: 'consolas'
        }
        const message = 'Welcome to React JS'
        const messageNext = 'This is about components'
        const headerElement = (
            <h2 id="mainHeader" style={styleObj} >
                <span>{message} </span>
                <span> {messageNext} </span>
            </h2>
        )
        return headerElement
    }

}
export default App