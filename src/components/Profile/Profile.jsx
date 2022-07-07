import React from 'react';
import PropTypes from 'prop-types';
import s from './Profile.module.css';

export const Profile = ({ data }) => {
  // console.log('data', data);
  const { username, tag, location, avatar, stats } = data;

  return (
    <div className={s.card}>
      <div className={s.descr}>
        <img
          src={avatar}
          alt={`${username}'s avatar`}
          width="200"
          className={s.avatar}
        />
        <b>{username}</b>
        <p>{`@${tag}`}</p>
        <p>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.statsItem}>
          <span>Followers</span>
          <b>{stats.followers}</b>
        </li>
        <li className={s.statsItem}>
          <span>Views</span>
          <b>{stats.views}</b>
        </li>
        <li className={s.statsItem}>
          <span>Likes</span>
          <b>{stats.likes}</b>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  data: PropTypes.object.isRequired,
};
