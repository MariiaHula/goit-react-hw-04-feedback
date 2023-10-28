import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper2 } from 'styles/Styles';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <Wrapper2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </Wrapper2>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
