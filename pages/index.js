import { Component } from 'react';

import Head from 'next/head';
import { fetchProducts } from '../app/services/productService';
import Layout from '@components/layout/layout/layout';
import ProductList from '@components/products/productList/productList';
import Title from '@components/shared/title/title';

class App extends Component {
	
	static async getInitialProps({ pathname, query }) {
		let response = await fetchProducts();
		return {
			products: response.data,
			pageData: (query && query.pageData) || {}
		};
	}
	
	render() {
		const { products, pageData } = this.props;
		return (
			<>
				<Head>
					<title>Julia Bags</title>
				</Head>
				<Layout>
					<div dangerouslySetInnerHTML={{ __html: pageData.content }} className="jkb-text-block" />
					<Title>{ pageData.title }</Title>
					<ProductList
						products={this.props.products}
					/>
				</Layout>
			</>
		);
	};
}

export default App;
