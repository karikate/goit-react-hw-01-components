import { Friend, FriendsList, FriendCard, Status } from './FriedList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(friend => (
        <Friend key={friend.id}>
          <FriendListItem item={friend} />
        </Friend>
      ))}
    </FriendsList>
  );
};

const FriendListItem = ({ item: { isOnline, avatar, name } }) => {
  return (
    <FriendCard>
      <Status class="status" $status={isOnline}></Status>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </FriendCard>
  );
};
