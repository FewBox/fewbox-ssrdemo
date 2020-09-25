import * as React from 'react';
import Master from '../../components/Master';
import * as FewBox from '@fewbox/react-components';
import { FormattedMessage } from 'react-intl';
import Feature1Svg from '../../svgs/feature1.svg';
import Feature2Svg from '../../svgs/feature2.svg';
import Feature3Svg from '../../svgs/feature3.svg'

export interface IFeatureProps {
}

class Feature extends React.Component<IFeatureProps> {
  public render() {
    return (
      <Master>
        <FewBox.Common.Row>
        <FewBox.Official.Product
            features={[
              {
                name: <FormattedMessage id="Label.Feature1Name" />,
                description: <FormattedMessage id="Label.Feature1Description" />,
                image: <Feature1Svg />
              },
              {
                name: <FormattedMessage id="Label.Feature2Name" />,
                description: <FormattedMessage id="Label.Feature2Description" />,
                image: <Feature2Svg />
              },
              {
                name: <FormattedMessage id="Label.Feature3Name" />,
                description: <FormattedMessage id="Label.Feature3Description" />,
                image: <Feature3Svg />
              }
            ]} />
        </FewBox.Common.Row>
      </Master>
    );
  }
}

export default Feature;
