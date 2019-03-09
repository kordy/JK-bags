import numeral from 'numeral';

numeral.localeData().delimiters.thousands = ' ';

export const priceFormat = price => price ? `${numeral(price).format('0,0[.]00')} ₽` : '';
