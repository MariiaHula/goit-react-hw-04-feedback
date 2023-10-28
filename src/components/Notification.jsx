import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper1 } from 'styles/Styles';

const Notification = ({ message }) => {
  return <Wrapper1>{message}</Wrapper1>;
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
