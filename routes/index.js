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

	keystoneApp.get('/api/product/:slug', (req, res, next) => {
		const Post = keystone.list('Product');
		Post.model
			.findOne({ state: 'published', slug: req.params.slug })
			.exec(function (err, results) {
				if (err) throw err;
				res.json(results);
			});
	});

	keystoneApp.get('/product/:slug', (req, res, next) => {
		handle(req, res, { pathname: `/productPage`, query: { ...req.params, ...req.query} });
	});

	keystoneApp.get('*', (req, res) => {
		const Page = keystone.list('Page');
		Page.model
			.findOne({ state: 'published', link: req.params[0] })
			.exec(function (err, result) {
				if (err) throw err;
				console.log(result)
				if (result) {
					handle(req, res, { pathname: `/${result.template}`, query: { ...req.query, pageData: result } });
				} else {
					handle(req, res);
				}
			});
	});
};
