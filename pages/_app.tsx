import React from 'react';
import '@fewbox/react-components/dist/fewbox-base.min.css';
import '@fewbox/web-components/dist/fewbox.min.css';

export default function FewBoxApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}