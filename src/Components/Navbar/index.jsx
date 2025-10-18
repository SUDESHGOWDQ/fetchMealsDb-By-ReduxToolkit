
import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import SearchBar from '../Search/SearchBar';


const Navbar = ({ onSearch }) => {
       return (
	       <nav className="navbar">
		       <div className="logo">🍽️ FoodApp</div>
		       <ul className="navLinks">
			       <li><Link to="/">Home</Link></li>
			       <li><Link to="/categories">Categories</Link></li>
			       <li><Link to="/about">About</Link></li>
		       </ul>
		       <SearchBar onSearch={onSearch} />
	       </nav>
       );
};

export default Navbar;
