import React from 'react';
import PropTypes from 'prop-types';
import s from './FriendsList.module.css';

export const FriendsItem = ({ item }) => {
  return (
    <li className={s.item}>
      <span className={s.status + ' ' + (item.isOnline ? s.on : s.off)}>
        {item.status}
      </span>
      <img
        src={item.avatar}
        alt={`${item.name}'s avatar`}
        className={s.avatar}
        width="100"
      />
      <p>{item.name}</p>
    </li>
  );
};

FriendsItem.propTypes = {
  item: PropTypes.object.isRequired,
};
