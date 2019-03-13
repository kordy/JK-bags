import React from 'react';
import './productList.styl';
import { priceFormat } from '@common/utilities';
import Button from '@components/shared/button/button';
import { getProductUrl } from '@components/products/productHelpers';

const ProductItem = ({ images, title, content, price, slug }) => (
	<div className="jkb-product-list-item">
		<div className="jkb-product-list-item__img-w">
			{
				images && images[0] && (
					<a href={getProductUrl(slug)} className="jkb-product-list-item__img-ww">
						<img className="jkb-product-list-item__img" src={images[0].secure_url} />
					</a>
				)
			}
		</div>
		<div className="jkb-product-list-item__about">
			<div className="jkb-product-list-item__name">
				{title}
			</div>
			<div dangerouslySetInnerHTML={{ __html: content.brief }} className="jkb-product-list-item__description" />
			<div className="jkb-product-list-item__price">
				{ priceFormat(price) }
			</div>
			<Button text="Заказать" />
		</div>
	</div>
);

export default ProductItem;
