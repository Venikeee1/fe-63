import { Link, useLocation } from 'react-router-dom';

export const BackButton = ({ children }) => {
  const { state } = useLocation();

  if (!state || !state.prevPage) return null;

  return (
    <Link style={{ color: '#fff' }} to={state.prevPage}>
      -- {children}
    </Link>
  );
};
