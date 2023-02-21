import { Link } from 'react-router-dom';
import { Container } from '../components/Container/Container';
import { PAGE_NAMES } from '../router/paths';

export const ErrorPage = () => {
  return (
    <Container>
      <div>404 page not found</div>
      <Link to={PAGE_NAMES.homepage}>Go to homepage</Link>
    </Container>
  );
};
