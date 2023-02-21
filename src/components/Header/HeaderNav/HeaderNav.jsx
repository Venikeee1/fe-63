import { NavLink } from 'react-router-dom';
import { PAGE_NAMES } from '../../../router/paths';
import styles from './HeaderNav.module.css';

export const HeaderNav = ({ isDesktop = true }) => {
  return (
    <div className={styles.navList}>
      <NavLink
        to={PAGE_NAMES.homepage}
        style={({ isActive }) => {
          if (isActive) return { color: 'purple' };
        }}
      >
        Homepage
      </NavLink>
      <NavLink>About me</NavLink>
      <NavLink
        to="/post"
        style={({ isActive }) => {
          if (isActive) return { color: 'purple' };
        }}
        end
      >
        Post
      </NavLink>
    </div>
  );
};
