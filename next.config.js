const path = require('path');

module.exports = {
    compress: false,
    devIndicators: {
        autoPrerender: false,
    },
    poweredByHeader: false,
    exportPathMap: async function (defaultPathMap) {
        return {
            '/': { page: '/' },
            '/about': { page: '/about' },
            '/pricing': { page: '/pricing' },
            '/feature': { page: '/feature' },
            '/404': { page: '/404' },
            '/500': { page: '/500' }
        }
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'style')],
    },
    webpack: (config, { isServer }) => {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: {
                test: /\.(js|ts)x?$/,
            },
            use: ['@svgr/webpack'],
        });
        return config;
    }
}