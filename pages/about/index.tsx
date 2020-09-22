import * as React from 'react';
import Master from '../../components/Master';
import * as FewBox from '@fewbox/react-components';

export interface IAboutProps {
}

class About extends React.Component<IAboutProps> {
  public render() {
    return (
      <Master>
        <FewBox.Common.Row>
          <div>About</div>
        </FewBox.Common.Row>
      </Master>
    );
  }
}

export default About;
