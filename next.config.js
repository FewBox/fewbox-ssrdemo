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
            '/pricing': { page: '/pricing' }
        }
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    webpack: (config, { isServer }) => {
        if (isServer) {
            require('./scripts/generate-sitemap');
        }
        return config;
    }
}