import React from 'react';
import ProductItem from '@components/products/productList/productItem';
import './productList.styl';

const ProductList = ({ products }) => (
	<div className="jkb-product-list">
		{
			products.map((post, i) => (
				<ProductItem {...post} key={post.id} />
			))
		}
	</div>
);

export default ProductList;
