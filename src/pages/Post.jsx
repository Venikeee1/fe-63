import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPostById } from '../api/postApi';
import { Container } from '../components/Container/Container';

const Post = () => {
  const params = useParams();
  const { id } = params;
  const [post, setPost] = useState(null);
  const [status, setStatus] = useState('idle');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setStatus('loading');

    fetchPostById(id)
      .then(({ data }) => {
        setPost(data);
        setStatus('fulfilled');
      })
      .catch((error) => {
        setStatus('error');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  if (status === 'idle' || isLoading) {
    return <>Loading...</>;
  }

  if (status === 'error') {
    return <>There was an error</>;
  }

  return (
    <>
      <Container>
        <h1>{post.title}</h1>

        <img
          className="blog-image"
          src="https://blog.logrocket.com/wp-content/uploads/2021/10/building-react-code-editor-syntax-highlighter.png"
          alt=""
        />
        <p className="blog-text">{post.text}</p>
      </Container>
    </>
  );
};

export default Post;
