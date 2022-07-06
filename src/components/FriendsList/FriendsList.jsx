import React from 'react';
// import PropTypes from 'prop-types';
import s from './FriendsList.module.css';

export const FriendsList = ({ data }) => {
  console.log('data', data);
  return <div className={s.card}></div>;
};

FriendsList.propTypes = {};
