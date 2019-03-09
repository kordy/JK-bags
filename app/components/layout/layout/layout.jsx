import React from 'react';
import Header from '@components/layout/header/header';
import Footer from '@components/layout/footer/footer';
import './layout.styl';

const Layout = ({ children }) => (
	<div className="jkb-layout">
		<div className="jkb-layout__content">
			<Header />
			<div className="jkb-wrapper">
				<div className="jkb-content">
					{ children }
				</div>
			</div>
		</div>
		<div className="jkb-layout__footer">
			<Footer />
		</div>
	</div>
);

export default Layout;
