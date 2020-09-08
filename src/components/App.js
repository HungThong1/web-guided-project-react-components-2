// This is the top-level component
// so we'll keep application state at this level.
// 1- Import the state hook!
import React, { useState } from 'react'
import FriendsList from './FriendsList'
import Search from './Search'
// 2- Import the dummy data that will power the application.
// (Tomorrow we'll fetch the data from an API instead.)
import dummyData from '../dummy-data/friends' // array of objects

export default function App() {
  // 3- Initialize a slice of state to keep track of the data
  // using the dummy data as the initial value of the slice of state
  const [friends, setFriends] = useState(dummyData) // array of objects

  // 4- Initialize a slice to keep track of the value of the search box
  // using an empty string as the initial value of the slice
  const [searchValue , setSearchValue] = useState('')

  // 5- Build a `changeStatus` function that takes an id and
  // changes the `married` from true to false and viceversa
  const changeStatus = id => {
    // def NOT event handler
    setFriends(friends.map(fr => {
      // return a NEW OBJECT with the married toggled!!!!!!
      // If id matches the one on the curr friend, return a new friend with that change
      // otherwise return the friend unchanged
      if (id === fr.id) {
        return {}
      }
      return fr
    })/* a new array of friends, made off of the old one */)
  }

  // STRETCH - Make a helper function that returns
  // a filtered array of friends data (filtering by search term)

  return (
    <div className='app-friends container'>
      {/* 6- Render the Search component */}
      {/* STRETCH - Changes to the input should update the search term */}

      {/* 7- Render the FriendsList component */}
      {/* What prop/props does FriendsList need? */}
    </div>
  )
}
