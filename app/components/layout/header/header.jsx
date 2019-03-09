import React from 'react';
import './header.styl';

const Header = () => (
	<div className="jkb-header">
		<div className="jkb-header__inner jkb-wrapper">
			<img src="/static/i/logo.jpg" className="jkb-header__logo" />
			<span>
				Julia Bags
			</span>
			<span>
				8-921-XXX-XX-XX
			</span>
		</div>
	</div>
);

export default Header;
