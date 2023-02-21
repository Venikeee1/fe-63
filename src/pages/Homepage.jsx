import { useEffect, useState } from 'react';
import { generatePath, Link } from 'react-router-dom';
import { fetchPostsList } from '../api/postApi';
import { Container } from '../components/Container/Container';
import { PAGE_NAMES } from '../router/paths';

const Homepage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPostsList().then(({ data }) => {
      setPosts(data.hits);
    });
  }, []);

  return (
    <>
      <Container>
        <h1>This is first blog about programming</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.objectID}>
              <Link
                style={{ color: '#fff', margin: '10px 0', display: 'block' }}
                to={generatePath(PAGE_NAMES.post, { id: post.objectID })}
              >
                {post.title ?? post.story_text}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
};

export default Homepage;
