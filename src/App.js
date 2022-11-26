import { useState  } from 'react';
import TypeWriter from 'typewriter-effect'
import {FaGithub, FaTwitter} from 'react-icons/fa'
import './App.css';
import ParticlesBackground from "./components/ParticlesBackground";
import TextEffect from './components/TextEffect';

const App = () => {
    const [Result, setResult] = useState("")
const [subResult, setsubResult] = useState('')
const handleSubmit = (e)=>{
   setResult(Result.concat(e.target.name))
}
const acHandler = () =>{
  setResult('')
}
const delHandler = () =>{
  setResult(Result.slice(0, Result.length-1))
}
const evaluate = () =>{
  try {
    setResult(eval(Result).toString())
  } catch (error) {
    setResult("Error")
  }
}

    return (
        <>
        <ParticlesBackground />
        <div className='calculator-grid'>
      <div className='typewriter'>
      <TextEffect />
      </div>
      <div className='output'>
        <div className='previous-operand'>{subResult}</div>
        <div className='current-operand'>{Result}</div>
      </div>
      <button onClick={acHandler} className='span-two'>AC</button>
      <button onClick={delHandler} >DEL</button>
      <button name='/' onClick={handleSubmit}>/</button>
      <button name='1' onClick={handleSubmit}>1</button>
      <button name='2' onClick={handleSubmit}>2</button>
      <button name='3' onClick={handleSubmit}>3</button>
      <button name='*' onClick={handleSubmit}>*</button>
      <button name='4' onClick={handleSubmit}>4</button>
      <button name='5' onClick={handleSubmit}>5</button>
      <button name='6' onClick={handleSubmit}>6</button>
      <button name='+' onClick={handleSubmit}>+</button>
      <button name='7' onClick={handleSubmit}>7</button>
      <button name='8' onClick={handleSubmit}>8</button>
      <button name='9' onClick={handleSubmit}>9</button>
      <button name='-' onClick={handleSubmit}>-</button>
      <button name='.' onClick={handleSubmit}>.</button>
      <button name='0' onClick={handleSubmit}>0</button>
      <button className='span-two' onClick={evaluate}>=</button>
    </div>
      <div className='icons'>
        <a href='https://github.com/faisalill' target='_blank'><FaGithub className='githubIcon' /></a>
        <a href='https://twitter.com/faisalilly' target='_blank'> <FaTwitter className='twitterIcon' /> </a>
      </div>
    </>
    );
};

export default App;