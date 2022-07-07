import React from 'react';
import PropTypes from 'prop-types';
import s from './FriendsList.module.css';
import { FriendsItem } from './FriendsItem';

export const FriendsList = ({ data }) => {
  // console.log('data', data);
  return (
    <ul className={s.card}>
      {data.map(item => (
        <FriendsItem item={item} key={item.id} />
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  data: PropTypes.array.isRequired,
};
