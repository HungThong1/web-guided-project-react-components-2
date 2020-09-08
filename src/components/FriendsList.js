import React from 'react'
// 1- FriendsList renders several Friend components, import Friend
import Friend from './Friend'

export default function FriendsList(props) {
  // 2- What data does FriendsList need to do its job? Use destructuring

  // there is an expectation that the data comes in
  // in the form of a prop called "list"

  // WITHOUT DESTRUCTURING
  // const friendsList = props.friendsList
  // const foo = props.foo
  // const ladyGaga = props.ladyGaga

  // WITH DESTRUCTURING
  const { friendsList, ladyGaga, foo } = props

  return (
    <div className='list-friends container'>
      {/* 3- We need to loop over the data rendering a Friend as we go */}
  
      {
        friendsList.map(friendObject => {
          return (
            <Friend key={} friend={friendObject} />
          )
        })
      }

      {/* Each friend is going to need a `key` prop and also some other prop with data */}
    </div>
  )
}
