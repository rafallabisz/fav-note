import React from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';
import withContext from 'hoc/withContext';
import { connect } from 'react-redux';

const DetailsPage = ({ activeItem }) => {
  const [item] = activeItem;

  return (
    <DetailsTemplate
      title={item.title}
      created={item.created}
      content={item.content}
      articleUrl={item.articleUrl}
      twitterName={item.twitterName}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    activeItem: state[ownProps.pageContext].filter(item => item._id === ownProps.match.params.id),
  };
};

export default withContext(connect(mapStateToProps)(DetailsPage));
