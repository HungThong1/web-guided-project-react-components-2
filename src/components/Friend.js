import React from 'react'
import PetsList from './PetsList'

export default function Friend(props) {
  // 1- What does a Friend need?
  const { friend } = props
  const { name, age, married, hobbies, pets } = friend

  return (
    <div className='friend-friends container'>
      {/* 2- Fix the JSX so it displays real info coming into the component */}
      <h2>{name}</h2>

      <div className='friend-info'>
        <div >
          <p>Age: {age}</p>

          <p>Married: {married ? 'yes' : 'no'} <button>change</button></p>
          <div>Likes:
            <ul>
              {/* 3- Loop over the friend's hobbies and generate <li/> elements as you go */}
              {
                hobbies.map(hob => <li>{hob}</li>)
              }
            </ul>
          </div>
        </div>

        <div>
          {/* 3- What data does the PetsList need? */}
          {/* What is the exact name of the prop/props it expects? */}
          {/* Is the data around here somewhere so I may pass it? */}
          <PetsList />
        </div>
      </div>
    </div>
  )
}
