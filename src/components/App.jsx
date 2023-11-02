import profileItem from '../user.json';
import { Profile } from './ProfileCard/ProfileCard';
import statItems from '../data.json';
import { Statistics } from './Statistics/StatLists';
import FriendItems from '../friends.json';
import { FriendList } from './FriendList/FriendList';
import TransactItems from '../transactions.json';
import { TransactionList } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile item={profileItem} />
      <Statistics items={statItems} />
      <FriendList friends={FriendItems} />
      <TransactionList items={TransactItems} />
    </div>
  );
};
