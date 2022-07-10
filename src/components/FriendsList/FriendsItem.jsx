// import PropTypes from 'prop-types';
import s from './FriendsList.module.css';

export const FriendsItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={s.item}>
      <span className={s.status + ' ' + (isOnline ? s.on : s.off)}>
        {/* {status} */}
      </span>
      <img
        src={avatar}
        alt={`${name}'s avatar`}
        className={s.avatar}
        width="100"
      />
      <p>{name}</p>
    </li>
  );
};

// FriendsItem.propTypes = {
//   item: PropTypes.object.isRequired,
// };
