import * as React from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';

export const getStaticProps: GetStaticProps = async (context) => {
    const resJson = {
        items: [
            { name: "smarter", price: 19.9 },
            { name: "box", price: 9.9 }
        ]
    };
    const pricings = resJson.items;
    return {
        props: {
            pricings: pricings,
        }, // will be passed to the page component as props
    }
}

interface Pricing {
    name: string;
    price: number;
}

export interface IPricingProps {
    pricings: Pricing[];
}

class Pricing extends React.Component<IPricingProps> {
    public render() {
        return (
            <div className="pricing">
                <Head>
                    <title>FewBox - Best Plugin and Extension Service for Cloud</title>
                    <meta name="description" content="FewBox a smart team!" />
                    <meta name="keywords" content="Plugin, Extension" />
                    <meta name="author" content="FewBox" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </Head>
                <div>Pricing</div>
                {
                    !!this.props.pricings && this.props.pricings.map((pricing, pricingIndex) => {
                        return <div>{pricing.name} : {pricing.price}</div>
                    })
                }
            </div>
        );
    }
}

export default Pricing;
