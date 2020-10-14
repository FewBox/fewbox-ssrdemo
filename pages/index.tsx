import * as React from 'react';
import FewBox from './merge';
import { FormattedMessage } from 'react-intl';
import Master from '../components/Master';
import LenovoSvg from '../svgs/lenovo.svg';
import SonySvg from '../svgs/sony.svg';
import TempurSealySvg from '../svgs/tempursealy.svg';
import BoostSolutionsSvg from '../svgs/boostsolutions.svg';
import BackgroundSvg from '../svgs/background.svg';
import Feature1Svg from '../svgs/feature1.svg';
import Feature2Svg from '../svgs/feature2.svg';
import Feature3Svg from '../svgs/feature3.svg';

export interface IHomeProps {
}

class Home extends React.Component<IHomeProps> {
  public render() {
    return (
      <Master>
        <FewBox.Official.Promo type={FewBox.Official.PromoType.Wistia} background={<BackgroundSvg />} />
        <FewBox.Official.Trusted caption={<FormattedMessage id="Label.Trusted" />}
          clients={[
            { name: <FormattedMessage id="Label.Brand" />, logo: <LenovoSvg /> },
            { name: <FormattedMessage id="Label.Brand" />, logo: <SonySvg /> },
            { name: <FormattedMessage id="Label.Brand" />, logo: <TempurSealySvg /> },
            { name: <FormattedMessage id="Label.Brand" />, logo: <BoostSolutionsSvg /> }
          ]} />
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
        <FewBox.Official.Pricing heroTitle={<FormattedMessage id="Label.PricingTitle" />} heroBody={<FormattedMessage id="Label.PricingBody" />} registryLink={{ path: 'registry', caption: <FormattedMessage id="Link.Registry" /> }} currenty="$" paypalEnvironment={FewBox.Official.PaypalEnvironmentType.Sandbox} paypalBusinessCode="GM5YEYHLR3XQL"
          prices={[
            { isRecommended: false, licenseType: FewBox.Official.LicenseType.Free, licenseCaption: <FormattedMessage id="Label.FreeLicense" />, discountedPrice: "0", description: <p><b>Free</b> download the kubernetes version and use them <b>Now</b></p> },
            {
              isRecommended: false, licenseType: FewBox.Official.LicenseType.Monthly, licenseCaption: <FormattedMessage id="Label.FreeLicense" />, originalPrice: "39.9", discountedPrice: "19.9", description: <div><p><b>Customized</b> search filter support</p>
                <p>Sync the search filter on cloud</p></div>
            },
            {
              isRecommended: true, licenseType: FewBox.Official.LicenseType.Yearly, licenseCaption: <FormattedMessage id="Label.FreeLicense" />, originalPrice: "478.8", discountedPrice: "199.9", description: <div><p><b>Customized</b> search filter support</p>
                <p>Sync the search filter on cloud</p></div>
            }
          ]} />
      </Master>
    );
  }
}

export default Home;
