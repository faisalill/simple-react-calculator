import React from 'react'
import TypeWriter from 'typewriter-effect'
const TextEffect = () => {
  return (
    <TypeWriter 
      options={{
        loop: true
      }}
      onInit={(typewriter) => {
        typewriter.typeString('Welcome!!!!').pauseFor(2000)
        .deleteAll()
        .typeString("いらっしゃいませ !!!")
        .pauseFor(2000)
        .deleteAll()
        .typeString("Bienvenidas !!!")
        .pauseFor(2000)
        .deleteAll()
        .typeString("欢迎 !!!")
        .pauseFor(2000)
        .deleteAll()
        .typeString("Bienvenue !!!")
        .pauseFor(2000)
        .deleteAll()
        .typeString("أهلا وسهلا !!!")
        .pauseFor(2000)
        .deleteAll()
        .start();
      }}
      />
  )
}

export default TextEffect
