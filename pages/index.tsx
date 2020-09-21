import * as React from 'react';
import * as FewBox from '@fewbox/react-components';
import { FormattedMessage } from 'react-intl';
import Master from '../components/Master';

export interface IHomeProps {
}

class Home extends React.Component<IHomeProps> {
  public render() {
    return (
      <Master>
        <FewBox.Official.Pricing registerUrl="#" currenty="$" paypalEnvironment={FewBox.Official.PaypalEnvironmentType.Sandbox} paypalBusinessCode="GM5YEYHLR3XQL"
          prices={[
            { isRecommended: false, licenseType: FewBox.Official.LicenseType.Free, licenseCaption: <FormattedMessage id="Label.FreeLicense" />, discountedPrice: "0", description: <p><b>Free</b> download the kubernetes version and use them <b>Now</b></p> },
            {
              isRecommended: false, licenseType: FewBox.Official.LicenseType.Monthly, licenseCaption: <FormattedMessage id="Label.MonthlyLicense" />, originalPrice: "39.9", discountedPrice: "19.9", description: <div><p><b>Customized</b> search filter support</p>
                <p>Sync the search filter on cloud</p></div>
            },
            {
              isRecommended: true, licenseType: FewBox.Official.LicenseType.Yearly, licenseCaption: <FormattedMessage id="Label.YearlyLicense" />, originalPrice: "478.8", discountedPrice: "199.9", description: <div><p><b>Customized</b> search filter support</p>
                <p>Sync the search filter on cloud</p></div>
            }
          ]} />
      </Master>
    );
  }
}

export default Home;
