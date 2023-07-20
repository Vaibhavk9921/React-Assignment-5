import { useState } from 'react';
import './App.css'
const App = () => {
    const [values, setValues] = useState([])
    const fname = useRef(null)
    const lname = useRef(null)
    const address = useRef(null)
    const handleEvent = (event) => {
        event.preventDefault()
        const a = fname.current.value
        const b = lname.current.value
        const c = address.current.value
        const newrow = { fname: a, lname: b, address: c }
        setValues([...values, newrow])
    }
    return (
        <div>
            <form onSubmit={handleEvent}>
                <input type='text' name='fname' placeholder='First Name' ref={fname}></input>
                <br></br>
                <input type='text' name='lname' placeholder='Last Name' ref={lname}></input>
                <br></br>
                <input type='text' name='address'placeholder='Address' ref={address}></input>
                <br></br>
                <button type='submit'>Click Here </button>
                <br></br>
            </form>
            <table border={1}>
                <tr>
                    <td> First Name</td>
                    <td>Last Name</td>
                    <td>Address</td>
                </tr>
                {values.map((row) => {
                    return (
                        <tr>
                            <td>{row.fname}</td>
                            <td>{row.lname}</td>
                            <td>{row.address}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}
export default App;