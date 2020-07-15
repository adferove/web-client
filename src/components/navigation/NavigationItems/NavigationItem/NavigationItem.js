import React from 'react';
import { Link } from 'react-router-dom';

const NavigationItem = (props) => {
  let icon = '';
  let linkStyle = ['navigation-items__link'];
  switch (props.type) {
    case 'm':
      icon = 'close';
      linkStyle.push('navigation-menu');
      break;
    case 'h':
      break;
    default:
      icon = 'keyboard_arrow_right';
  }
  return (
    <li className="navigation-items__item">
      <Link className={linkStyle.join(' ')} to={props.link}>
        {props.children}
        <div className="navigation-items__icon">
          <i className="material-icons">{icon}</i>
        </div>
      </Link>
    </li>
  );
};

export default NavigationItem;
