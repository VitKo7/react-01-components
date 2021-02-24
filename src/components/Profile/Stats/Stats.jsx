import React from 'react';
// import PropTypes from "prop-types";

const Stats = ({ followers, views, likes }) => (
  <div>
    <span class="label">Followers||Views||Likes</span>
    <span class="quantity">{followers || views || likes}</span>
  </div>
);

export default Stats;
