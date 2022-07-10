import { FriendsList } from './FriendsList';
import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { TransactionHistory } from './TransactionHistory';

import user from '../data/user.json';
import friends from '../data/friends.json';
import stat from '../data/stats.json';
import transactions from '../data/transactions.json';

export const App = () => {
  const { username, tag, location, avatar, stats } = user;

  console.log('user', user);
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        // fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <FriendsList friends={friends} />
      <Statistics stats={stat} title="Upload stats" />
      <TransactionHistory data={transactions} />
    </div>
  );
};
