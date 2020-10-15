import * as React from 'react';
import Master from '../../components/Master';
import FewBox from '../../fewbox/mingle';
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
        <FewBox.Layout.Row>
        <FewBox.Official.Product
          heroTitle={<FormattedMessage id="Label.ProductTitle" />}
          heroBody={<FormattedMessage id="Label.ProductBody" />}
          features={[
            {
              name: <FormattedMessage id="Label.Feature1Name" />,
              descriptions: [
                <FormattedMessage id="Label.Feature1Description1" />,
                <FormattedMessage id="Label.Feature1Description2" />,
                <FormattedMessage id="Label.Feature1Description3" />],
              image: <Feature1Svg />
            },
            {
              name: <FormattedMessage id="Label.Feature2Name" />,
              descriptions: [
                <FormattedMessage id="Label.Feature2Description1" />,
                <FormattedMessage id="Label.Feature2Description2" />,
                <FormattedMessage id="Label.Feature2Description3" />
              ],
              image: <Feature2Svg />
            },
            {
              name: <FormattedMessage id="Label.Feature3Name" />,
              descriptions: [
                <FormattedMessage id="Label.Feature3Description1" />,
                <FormattedMessage id="Label.Feature3Description2" />,
                <FormattedMessage id="Label.Feature3Description3" />
              ],
              image: <Feature3Svg />
            }
          ]} />
        </FewBox.Layout.Row>
      </Master>
    );
  }
}

export default Feature;
