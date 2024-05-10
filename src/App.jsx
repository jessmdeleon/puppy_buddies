
import { puppyList } from './data'
import { useState } from 'react'
import './App.css'



function App() {
  console.log(puppyList);

  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null)

  console.log(puppies)

  let featuredPup = null;
  if (featPupId) {
    featuredPup = puppies.find((pub)=> pub.id === featPupId);
  }

  return (
      <div className="App"> 

      { featPupId && (
        <div>
          <h2>{ featuredPup.name }</h2>
          <ul>
            <li>Age: {featuredPup.age} </li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
        {puppies.map((puppy) => {
            return (
            <p onClick = {() => { setFeatPupId(puppy.id) }} key= {puppy.id}>  {puppy.name}  </p>
            )
          })}
      </div>
  )
}

export default App