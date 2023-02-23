import { useEffect, useMemo, useState } from 'react';
import { generatePath, useSearchParams } from 'react-router-dom';
import { fetchPostsList } from '../api/postApi';
import { Container } from '../components/Container/Container';
import { LinkWithPrevPageState } from '../components/LinkWithPrevPageState/LinkWithPrevPageState';
import { PAGE_NAMES } from '../router/paths';
import { useDebounce } from '../utils/useDebounce';

const Homepage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState(params.query ?? '');
  const debouncedQuery = useDebounce(query);

  const handleQueryChange = (event) => {
    // const {
    //   target: { value },
    // } = event;
    const { value } = event.target;

    setQuery(value);
  };

  useEffect(() => {
    fetchPostsList(debouncedQuery).then(({ data }) => {
      setPosts(data.hits);
      setSearchParams(debouncedQuery ? { query: debouncedQuery } : {});
    });
    // do not put setSearchParams in useEffect deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedQuery]);

  return (
    <>
      <Container>
        <h1>Search article</h1>
        <input type="text" value={query} onChange={handleQueryChange} />
        <ul>
          {posts.map((post) => (
            <li key={post.objectID}>
              <LinkWithPrevPageState
                style={{ color: '#fff', margin: '10px 0', display: 'block' }}
                to={generatePath(PAGE_NAMES.post, { id: post.objectID })}
              >
                {post.title ?? post.story_text}
              </LinkWithPrevPageState>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
};

export default Homepage;
