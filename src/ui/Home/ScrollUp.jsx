import { NavLink } from 'react-router-dom';

export default function ScrollUp({ show }) {
  return (
    <NavLink to="/#home" className={`scrollup ${show ? 'show-scroll' : ''}`} id="scroll-up">
      <i className="ri-arrow-up-s-line" />
    </NavLink>
  );
}
