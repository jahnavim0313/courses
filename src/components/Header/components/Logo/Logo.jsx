import React from 'react';
import './Logo.css';
function Logo() {
	return (
		<img src={require('./epam_logo.png')} alt='Epam Logo' className='logo' />
	);
}

export default Logo;
