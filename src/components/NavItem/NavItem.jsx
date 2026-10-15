import { NavLink } from 'react-router-dom';
import './NavItem.css'

export const NavItem = ({ to, content }) => {
    return (
    <li>
        <NavLink
            className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'}
            to={to}
        >
            {content}
        </NavLink>
    </li>
    );
};
