import { useLoaderData } from 'react-router-dom';

import { getUser } from 'api';
import './User.css';
import defaultAvatar from 'images/default_avatar.png';

export async function loader(data) {
  const user = await getUser(data.params.user_id);

  return {user};
};

function capitalize(str) {
  return (
    str.split(' ')
    .map(word => `${word.substr(0,1).toUpperCase()}${word.substr(1)}`)
  ).join(' ');
}

export default function User() {
  const {user} = useLoaderData();

  return (
    <div className="page--user">
      <div className='row'>
        <div className='user-avatar'
          style={{backgroundImage: `url(${user.image ? `data:image/png;base64,${user.image}` : defaultAvatar}`}}
        ></div>

        <div className='user-details'>
          <h2 className='user-name'>{`${user.first_name} ${user.last_name}`}</h2>
          <div className='user-metrics'>
            <p className='user-metric'>{`${user.stats.current_streak_in_days}-day Streak`}</p>
            <p className='user-metric'>{`${user.stats.total_sessions_played} Sessions`}</p>
          </div>
        </div>
      </div>

      <section className='user-stats'>
        <h2 className='user-section-title'>Your Stats</h2>
        <ul className='user-stat-chart'>
          {Object.entries(user.stats.skills).map(([statName, {current, level, max}], index) => {
            return (
              <li className={`user-stat ${statName}`} key={index}
              data-stat-current={current} data-stat-max={max} data-stat-level={level}>
                <div className='user-stat-bar--max'>
                  <div className='user-stat-bar--current'
                  style={{height: `${(current/max) * 100}%`}}></div>
                </div>
                <p className='user-stat-text user-stat-label'>{capitalize(statName)}</p>
                <p className={`user-stat-text user-stat-level user-stat-level--${level}`}>{capitalize(level)}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

