import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Twitters = ({ twitters }) => {
  return (
    <GridTemplate>
      {twitters.map(({ title, created, content, twitterName, id }) => (
        <Card
          cardType="twitters"
          title={title}
          created={created}
          content={content}
          twitterName={twitterName}
          key={id}
          id={id}
        />
      ))}
    </GridTemplate>
  );
};

Twitters.propTypes = {
  twitters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      twitterName: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ),
};

Twitters.defaultProps = {
  twitters: [],
};
const mapStateToProps = ({ twitters }) => ({ twitters });
export default connect(mapStateToProps)(Twitters);
