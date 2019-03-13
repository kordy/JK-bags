import axios from 'axios';
import { HOST } from './_serviceHelpers';

export const fetchProducts = () => axios.get(`${HOST}/api/products`);
export const fetchProduct = slug => axios.get(`${HOST}/api/product/${slug}`);
