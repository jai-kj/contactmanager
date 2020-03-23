import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Header = (props) => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark mb-3 py-0" style={{backgroundColor: '#20232a'}}>
      <div className="container">
        <a href="/" className="navbar-brand" style={{color: '#61DAFB'}}>{branding}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link mx-3"><i className="fas fa-home"> Home</i></Link>
            </li>
            <li className="nav-item">
              <Link to="/addContacts" className="nav-link mx-3"><i className="fas fa-plus"> Add</i></Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link mx-3"><i className="fas fa-question"> About</i></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

Header.defaultProps = {
  branding: 'My App'
}

Header.propType = {
  branding: PropTypes.string.isRequired
}
export default Header
