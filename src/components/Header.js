import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  return (
    <div className="navbar navbar-dark bg-primary text-center justify-content-center py-3 mb-3">
      {location.pathname !== '/' && (
        <Link exact to="/">
          <i className="fas fa-home text-white fs-3" />
        </Link>
      )}
    </div>
  );
};

export default Header;
