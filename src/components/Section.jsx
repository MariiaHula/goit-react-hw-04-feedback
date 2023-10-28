import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Wrapper1, Title } from 'styles/Styles';

const Section = ({ title, children }) => {
  return (
    <section>
      <Wrapper>
        <Title>{title}</Title>
        <Wrapper1>{children}</Wrapper1>
      </Wrapper>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
