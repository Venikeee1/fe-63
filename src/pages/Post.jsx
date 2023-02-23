import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate, useParams, Navigate } from 'react-router-dom';
import { fetchPostById } from '../api/postApi';
import { BackButton } from '../components/BackButton/BackButton';
import { Container } from '../components/Container/Container';

// const settings = { name: 'fadeIn', duration: 200 };

const Post = () => {
  const params = useParams();
  const { id } = params;
  const [post, setPost] = useState(null);
  const [status, setStatus] = useState('idle');
  const [isLoading, setIsLoading] = useState(false);
  const [counter, setCounter] = useState(0);
  // const settings = useRef({ name: 'fadeIn', duration: 200 });

  const navigate = useNavigate();
  // const counter = useRef(0);
  // const settings = useMemo(() => {
  //   return { name: 'fadeIn', duration: 200 };
  // }, []);

  const handleBackButtonClick = () => {
    navigate('/');
  };

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
    return <Navigate to="/error" />;
  }

  return (
    <>
      <Container>
        <BackButton>Back</BackButton>
        <h1>
          {post.title}: {counter.current}
        </h1>
        <button onClick={() => setCounter((prev) => prev + 1)}>Click me</button>
        {/* <button
          onClick={() => {
            console.log(counter.current);
            counter.current = counter.current + 1;
          }}
        >
          Click me
        </button> */}
        {/* <Foo settings={settings.current} /> */}

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

// const Foo = ({ settings }) => {
//   useEffect(() => {
//     console.log(settings);
//   }, [settings]);

//   return <>This is Foo</>;
// };
