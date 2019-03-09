const keystone = require('keystone');

// Setup Route Bindings
exports = module.exports = nextApp => keystoneApp => {

	// Next request handler
	const handle = nextApp.getRequestHandler();

	keystoneApp.get('/api/products', (req, res, next) => {
		const Post = keystone.list('Product');
		Post.model
			.find()
			.where('state', 'published')
			.sort({ publishedDate: 1 })
			.exec(function (err, results) {
				if (err) throw err;
				res.json(results);
			});
	});

	keystoneApp.get('*', (req, res) => {
		return handle(req, res);
	});
};
