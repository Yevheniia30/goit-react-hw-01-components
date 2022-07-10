import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export const Statistics = ({ stats, title }) => {
  const bgColor = () => {
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    const bgColor = 'rgb(' + x + ',' + y + ',' + z + ')';
    return bgColor;
  };

  // console.log('stats', stats);
  return (
    <div className={s.card}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.list}>
        {stats.map(item => (
          <li
            key={item.id}
            className={s.item}
            style={{ backgroundColor: bgColor() }}
          >
            <span>{item.label}</span>
            <span>{item.percentage}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string.isRequired,
};
