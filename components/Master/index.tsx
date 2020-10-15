import Head from 'next/head';
import FewBox from '../../theme/merge';
import * as React from 'react';
import { FormattedMessage, IntlProvider } from 'react-intl';
import langs from '../../langs';
import LogoSvg from '../../svgs/logo.svg';
import LogoGraySvg from '../../svgs/logo-gray.svg';

export interface IMasterProps {
}

export default class Master extends React.Component<IMasterProps, any> {
    public render() {
        return (
            <IntlProvider locale={'en'} messages={langs('en-us')}>
                <Head>
                    <title>FewBox - Best Plugin and Extension Service for Cloud</title>
                    <link rel="shortcut icon" href="/favicon.ico" />
                    <meta name="description" content="FewBox a smart team!" />
                    <meta name="keywords" content="Plugin, Extension" />
                    <meta name="author" content="FewBox" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </Head>
                <FewBox.Analyze.GA trackingId="UA-132759085-1" isDebug={true} app="fewbox" path={(typeof(window)=='object')?window.location.pathname:'unknow'} />
                <FewBox.VI.Style />
                <FewBox.Layout.Container>
                    <FewBox.Official.Header logo={<LogoSvg />} slogan="Plugin Cloud">
                        <FewBox.Official.Nav donateLink={<FormattedMessage id="Link.Donate" />} extensionNavLinks={[
                            { path: 'feature', caption: <FormattedMessage id="Link.Feature" /> },
                            { path: 'pricing', caption: <FormattedMessage id="Link.Pricing" /> }]} />
                    </FewBox.Official.Header>
                    {this.props.children}
                </FewBox.Layout.Container>
                <FewBox.Official.Footer logo={<LogoGraySvg />} copyrightCaption={<FormattedMessage id="Label.Copyright" />} />
            </IntlProvider>
        );
    }
}