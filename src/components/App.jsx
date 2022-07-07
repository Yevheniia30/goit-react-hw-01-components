import { FriendsList } from './FriendsList';
import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { TransactionHistory } from './TransactionHistory';

import user from '../data/user.json';
import friends from '../data/friends.json';
import stats from '../data/stats.json';
import transactions from '../data/transactions.json';

export const App = () => {
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
      <Profile data={user} />
      <FriendsList data={friends} />
      <Statistics data={stats} title="Upload stats" />
      <TransactionHistory data={transactions} />
    </div>
  );
};
