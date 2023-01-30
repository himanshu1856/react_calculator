import React, {useState} from "react"
import './keypad.css'
import {FaEquals,FaMinus,FaDivide,FaPercent} from 'react-icons/fa'
import {MdExposureZero} from 'react-icons/md'
import {BsDot,BsPlusLg,BsFillBackspaceFill} from 'react-icons/bs'
import {RxCross1} from 'react-icons/rx'
const Keypad = () => {

    const [input, setInput] = useState('');

    const handleClick = (value) => {
        setInput(input + value)
    }

    const handleEqual = () => {
        setInput(eval(input).toString())
    }

    const handleClear = () => {
        setInput('')
    }

    const handleBS = () => {
        let val = input
        val = val.slice(0,val.length-1)
        setInput(val)
    }

    return(
        <div className="keypad">
            <div className="output">
                <span className="result">{input}</span>
            </div>
            <table >
                <tr>
                    <td>
                        <div className="buttonPmy">
                        <button onClick={handleClear}>C</button>
                        <button onClick={() => handleClick('%')}><FaPercent/></button>
                        <button onClick={handleBS}><BsFillBackspaceFill/></button>
                        </div>
                    </td>  
                </tr>
                <tr>
                    <td>
                        <div className="buttonNml">
                            <button onClick={() => handleClick('7')}>7</button>
                            <button onClick={() => handleClick('8')}>8</button>
                            <button onClick={() => handleClick('9')}>9</button>
                            <button onClick={() => handleClick('/')}><FaDivide/></button>
                        </div>
                    </td>  
                </tr>
                <tr>
                    <td>
                        <div className="buttonNml">
                            <button onClick={() => handleClick('4')}>4</button>
                            <button onClick={() => handleClick('5')}>5</button>
                            <button onClick={() => handleClick('6')}>6</button>
                            <button onClick={() => handleClick('*')}><RxCross1/></button>
                        </div>
                    </td>  
                </tr>
                <tr>
                    <td>
                        <div className="buttonNml">
                            <button onClick={() => handleClick('1')}>1</button>
                            <button onClick={() => handleClick('2')}>2</button>
                            <button onClick={() => handleClick('3')}>3</button>
                            <button onClick={() => handleClick('-')}><FaMinus/></button>
                        </div>   
                    </td>  
                </tr>
                <tr>
                    <td>
                        <div className="buttonNml">
                            <button onClick={handleEqual} id="main"><FaEquals/></button>
                            <button onClick={() => handleClick('0')}><MdExposureZero/></button>
                            <button onClick={() => handleClick('.')}><BsDot/></button>
                            <button onClick={() => handleClick('+')}><BsPlusLg/></button>
                        </div>
                    </td>  
                </tr>
                
            </table>
        </div> 
    )
}

export default Keypad