import * as React from 'react';
import * as FewBox from '@fewbox/react-components';
import Head from 'next/head';

export interface IHomeProps {
}

class Home extends React.Component<IHomeProps> {
  public render() {
    return (
      <div>
        <Head>
          <title>FewBox - Best Plugin and Extension Service for Cloud</title>
          <meta name="description" content="FewBox a smart team!" />
          <meta name="keywords" content="Plugin, Extension" />
          <meta name="author" content="FewBox" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <FewBox.Core.Header />
        <FewBox.Official.Pricing />
        <FewBox.Core.Footer />
      </div>
    );
  }
}

export default Home;
