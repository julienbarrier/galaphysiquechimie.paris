import React from 'react';
import PropTypes from 'prop-types';
import Page from '../../components/internal/Page';
import FourOhFour from '../404';

import MarkdownPage from '../../components/internal/MarkdownPage';

import ServiceProviders from './ServiceProviders';

class GettingStarted extends React.Component {
  static propTypes = {
    params: PropTypes.object,
  };

  render() {
    const { params } = this.props;
    const title = params.name.charAt(0).toUpperCase() + params.name.substring(1);
    const processENV = process.env.ENV;
    if (params.name === 'service-providers' && !(processENV === 'internal')) {
      return <FourOhFour />;
    }
    let content;
    if (params.name === 'service-providers') {
      content = <ServiceProviders currentPage={params.page} />;
    } else {
      content = (
        <MarkdownPage content={require(`../../../content/getting-started/${params.name}/${params.name}.md`)} />
      );
    }
    return (
      <Page
        label="Getting started"
        title={title.replace(/-/g, ' ')}
        content={content}
      />
    );
  }
}

export default GettingStarted;
