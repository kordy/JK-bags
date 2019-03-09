import { Component } from 'react';

import Head from 'next/head';
import { fetchProducts } from '../app/services/productService';
import Layout from '@components/layout/layout/layout';
import ProductList from '@components/products/productList/productList';
import Title from '@components/shared/title/title';

class App extends Component {
	
	static async getInitialProps() {
		let response = await fetchProducts();
		return {
			products: response.data
		};
	}
	
	render() {
		return (
			<>
				<Head>
					<title>Julia Bags</title>
				</Head>
				<Layout>
					<div className="jkb-text-block">
						<h1>Добрый день!!!</h1>
						<p>Блаблабла бла бла блабла бла</p>
						<p>Блаблабла бла бла блабла бла</p>
						<p>Блаблабла бла бла блабла бла</p>
						<p>Блаблабла бла бла блабла бла</p>
					</div>
					<Title>Коллекция работ</Title>
					<ProductList
						products={this.props.products}
					/>
				</Layout>
			</>
		);
	};
}

export default App;
