import { Component } from 'react';

import Head from 'next/head';
import { fetchProduct } from '../app/services/productService';
import Layout from '@components/layout/layout/layout';
import ProductDetails from '@components/products/productDetails/productDetails';

class ProductPage extends Component {

	static async getInitialProps({ pathname, query }) {
		let response = await fetchProduct(query && query.slug);
		return {
			product: response.data
		};
	}

	render() {
		const { product } = this.props;
		return product && (
			<>
				<Head>
					<title>{product.title}</title>
				</Head>
				<Layout>
					<ProductDetails { ...product }/>
				</Layout>
			</>
		);
	};
}

export default ProductPage;
