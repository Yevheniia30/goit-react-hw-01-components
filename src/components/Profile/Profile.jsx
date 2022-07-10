import PropTypes from 'prop-types';
import s from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  // console.log('data', data);
  // const { username, tag, location, avatar, stats } = data;

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
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
  }),
};
