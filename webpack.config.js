const path = require('path');

module.exports = {

	resolve: {
		alias: {
			'@components': path.resolve(__dirname, 'app/components'),
			'@common': path.resolve(__dirname, 'app/common'),
			'@services': path.resolve(__dirname, 'app/services')
		}
	}
};
