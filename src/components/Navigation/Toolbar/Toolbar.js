import React from 'react';
import { Link } from 'react-router-dom';

const Toolbar = () => {
  return (
    <nav className="navbar bg-primary">
      <Link to="/">
        <h3>Legal Aid NSW</h3>
      </Link>
      <ul>
        <li>
          <Link to="/dictionary">Legal Dictionary</Link>
        </li>
        <li>
          <Link to="/faqs">FAQs</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Toolbar;
