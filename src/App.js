import React from 'react';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import { user, statisticalData, friends, transactions } from './data/index';

// import user from './data/user.json';
// import statisticalData from './data/statistical-data.json';
// import friends from './data/friends.json';
// import transactions from './data/transactions.json';

const App = () => {
  return (
    <div>
      <h1 className="tasks-title">React: homework #1</h1>
      <div className="tasks">
        <Profile
          {...user}
          // name={user.name}
          // tag={user.tag}
          // location={user.location}
          // avatar={user.avatar}
          // stats={user.stats}
        />
        <Statistics title="Upload stats" stats={statisticalData} />
        {/* <Statistics stats={statisticalData} /> */}
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </div>
    </div>
  );
};

export default App;
