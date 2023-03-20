import { FriendListItem } from './FriendCard/FriendListItem';
import { FriendsList } from './FriendList.styled';
import PropTypes from 'prop-types';

export function FriendList({ friends }) {
  return (
    <FriendsList>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </FriendsList>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
