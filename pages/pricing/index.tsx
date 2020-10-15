import * as React from 'react';
import FewBox from '../../theme/merge';
import { GetStaticProps } from 'next';
import { FormattedMessage } from 'react-intl';
import Master from '../../components/Master';

export const getStaticProps: GetStaticProps = async (context) => {
    const resJson = {
        items: []
    };
    const pricings = resJson.items;
    return {
        props: {
            pricings: pricings,
        }, // will be passed to the page component as props
    }
}

export interface IPricingProps {
    pricings: any[];
}

class Pricing extends React.Component<IPricingProps> {
    public render() {
        return (
            <Master>
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

export default Pricing;
