import PropTypes from 'prop-types';
import {
  FriendItem,
  FriendAvatar,
  UserName,
  IsOnlineMarkerOffline,
  IsOnlineMarkerActive,
} from './FriendListItem.styled';

export function FriendListItem({ friend: { isOnline, avatar, name } }) {
  return (
    <FriendItem>
      <IsOnline status={isOnline} />
      <FriendAvatar src={avatar} alt="User avatar" width="48" />
      <UserName>{name}</UserName>
    </FriendItem>
  );
}

function IsOnline({ status }) {
  if (status === true) {
    return <IsOnlineMarkerActive></IsOnlineMarkerActive>;
  } else {
    return <IsOnlineMarkerOffline></IsOnlineMarkerOffline>;
  }
}
FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
