
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import SearchBar from '../Search/SearchBar';


const Navbar = ({ onSearch }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	return (
		<nav className="navbar">
			<div className="logo">🍽️ FoodApp</div>
			
			<button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
				<span className={isMenuOpen ? 'active' : ''}></span>
				<span className={isMenuOpen ? 'active' : ''}></span>
				<span className={isMenuOpen ? 'active' : ''}></span>
			</button>

			<div className={`nav-content ${isMenuOpen ? 'active' : ''}`}>
				<ul className="navLinks">
					<li><Link to="/" onClick={closeMenu}>Home</Link></li>
					<li><Link to="/categories" onClick={closeMenu}>Categories</Link></li>
					<li><Link to="/about" onClick={closeMenu}>About</Link></li>
				</ul>
				<SearchBar onSearch={onSearch} />
			</div>
		</nav>
	);
};

export default Navbar;
