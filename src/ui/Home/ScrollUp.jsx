import { NavLink } from 'react-router-dom';
import { hashPath } from '../../utils/hashPath';

export default function ScrollUp({ show }) {
  return (
    <NavLink to={hashPath('home')} className={`scrollup ${show ? 'show-scroll' : ''}`} id="scroll-up">
      <i className="ri-arrow-up-s-line" />
    </NavLink>
  );
}
