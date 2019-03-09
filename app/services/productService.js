import axios from 'axios';
import { HOST } from './_serviceHelpers';

export const fetchProducts = () => axios.get(`${HOST}/api/products`);
