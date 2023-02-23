import { Link } from 'react-router-dom';
import { Container } from '../components/Container/Container';
import { useMouseContext } from '../context/mouseContext';
import { PAGE_NAMES } from '../router/paths';

export const ErrorPage = () => {
  const { mousePosition } = useMouseContext();
  console.log(mousePosition);

  return (
    <Container>
      <div>404 page not found</div>
      <Link to={PAGE_NAMES.homepage}>Go to homepage</Link>
    </Container>
  );
};

export default ErrorPage;
