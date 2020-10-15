import * as React from 'react';
import Master from '../../components/Master';
import FewBox from '../../fewbox/mingle';

export interface IAboutProps {
}

class About extends React.Component<IAboutProps> {
  public render() {
    return (
      <Master>
        <FewBox.Layout.Row>
          <div>About</div>
        </FewBox.Layout.Row>
      </Master>
    );
  }
}

export default About;
