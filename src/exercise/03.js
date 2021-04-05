// Lifting state
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

function Name({name, onNameChange}) {
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input id="name" value={name} onChange={onNameChange} />
    </div>
  )
}

// 🐨 accept `animal` and `onAnimalChange` props to this component
function Animal({animal, onAnimalChange}) {
  return (
    <div>
      <label htmlFor="name">Favorite Animal: </label>
      <input id="name" value={animal} onChange={onAnimalChange} />
    </div>
  )
}

// 🐨 uncomment this
function Display({name, animal}) {
   return <div>{`Hey ${name}, your favorite animal is: ${animal}!`}</div>
}

/* 💣 remove this component in favor of the new one
function Display({name}) {
  return <div>{`Hey ${name}, you are great!`}</div>
}*/

function App() {
  // 🐨 add a useState for the animal
  const [name, setName] = React.useState('')
  let [animal, setAnimal] = React.useState('')
  return (
    <form>
      <Name name={name} onNameChange={event => setName(event.target.value)} />
      {/* 🐨 pass the animal and onAnimalChange prop here (similar to the Name component above) */}
      <Animal animal={animal} onAnimalChange={event => setAnimal(event.target.value)}/>
      {/* 🐨 pass the animal prop here */}
      <Display name={name} animal={animal} />
    </form>
  )
}

export default App
