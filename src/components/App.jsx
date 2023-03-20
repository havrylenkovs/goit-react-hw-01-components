import { Profile } from '../components/Profile/Profile';
import { Statistics } from '../components/Statistics/Statistics';
import { FriendList } from '../components/FriendList/FriendList';
import { TransactionHistory } from '../components/TransactionHistory/TransactionHistory';
import { Contaiter, Card } from './App.styled';

import user from '../jsons/user.json';
import data from '../jsons/data.json';
import friends from '../jsons/friends.json';
import transactions from '../jsons/transactions.json';

export const App = () => {
  return (
    <Contaiter>
      <Card>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Card>
      <div className="statistics-wrapper">
        <Statistics title="Upload stats" stats={data} />
      </div>
      <div className="friends-wrapper">
        <FriendList friends={friends} />
      </div>
      <div className="transaction-wrapper">
        <TransactionHistory items={transactions} />
      </div>
    </Contaiter>
  );
};
