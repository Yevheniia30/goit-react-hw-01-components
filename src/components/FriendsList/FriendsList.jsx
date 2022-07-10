import PropTypes from 'prop-types';
import s from './FriendsList.module.css';
import { FriendsItem } from './FriendsItem';

export const FriendsList = ({ friends }) => {
  // console.log('friends', friends);
  return (
    <ul className={s.card}>
      {friends.map(item => (
        <FriendsItem
          avatar={item.avatar}
          isOnline={item.isOnline}
          name={item.name}
          key={item.id}
        />
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ),
};
