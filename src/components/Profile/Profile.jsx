import React from 'react';
import style from './style.css';

import PropTypes from 'prop-types';
import defaultImage from './default.jpg';
// import Stats from './Stats/Stats';

const Profile = ({ name, tag, location, avatar, stats }) => (
  <div className="profile">
    <div key={tag} className="description">
      <img src={avatar} alt="Аватар пользователя" className="avatar" />
      <p className="name">{name}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>

    <ul className="stats">
      {/* {stats.map(stat => (
        <li key={tag}>
          <Stats {...stats} />
        </li>
      ))} */}

      <li>
        <span className="label">Followers</span>
        <span className="quantity">{stats.followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity">{stats.views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity">{stats.likes}</span>
      </li>
    </ul>
  </div>
);

export default Profile;

Profile.defaultProps = {
  avatar: defaultImage,
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};
