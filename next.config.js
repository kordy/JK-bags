const withStylus = require('@zeit/next-stylus');
const webpackConfigFile = require('./webpack.config');

const nextConfig = {
	webpack: webpackConfig => {
		webpackConfig.resolve = webpackConfigFile.resolve;
		webpackConfig.resolve.extensions = ['.js', '.jsx'];
		console.log(webpackConfig.resolve);
		return webpackConfig;
	}
};

module.exports = withStylus(nextConfig);
