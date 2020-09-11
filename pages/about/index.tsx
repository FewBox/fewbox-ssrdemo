import * as React from 'react';
import Head from 'next/head';

export interface IAboutProps {
}

class About extends React.Component<IAboutProps> {
  public render() {
    return (
      <div className="about">
        <Head>
          <title>FewBox - Best Plugin and Extension Service for Cloud</title>
          <meta name="description" content="FewBox a smart team!" />
          <meta name="keywords" content="Plugin, Extension" />
          <meta name="author" content="FewBox" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <div>About</div>
      </div>
    );
  }
}

export default About;
