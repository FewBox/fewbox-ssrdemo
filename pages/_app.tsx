import React from 'react';
import '@fewbox/react-components/dist/fewbox.min.css';

export default function FewBoxApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}