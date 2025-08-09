import { useState } from 'react'
import './App.css'
import Inputs from './components/Inputs/Inputs'
import Resume from './components/Resume/Resume'

function App() {
    // const [count, setCount] = useState(0)

    return (
        <div className="app">
            <Inputs />
            <Resume />
        </div>
    )
}

export default App
