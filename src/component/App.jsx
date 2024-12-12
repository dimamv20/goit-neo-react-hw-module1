import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '..//App.css'
import userData from '../userData.json'
import friends from '../friends.json'
import Profile from './Profile'
import FriendList from './FriendList'
import transactionsDates from '../transactions.json'
import TransactionHistory from './TransactionHistory'

const uData = {
          name:'{userData.username}',
          tag:'{userData.tag}',
          location:'{userData.location}',
          image:'{userData.avatar}',
          stats:'{userData.stats}'
}
function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactionsDates.transactions} />
    </>
  );
}

export default App;

