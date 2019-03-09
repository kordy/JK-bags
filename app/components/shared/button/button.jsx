import React from 'react';
import './button.styl';

const Button = ({ text, href, onClick }) => (
	<button className="jkb-button">
		{text}
	</button>
);

export default Button;
