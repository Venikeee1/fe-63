import { Routes, Route, generatePath, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { PAGE_NAMES } from './router/paths';
import { MainLayout } from './Layouts/MainLayout';
import { Container } from './components/Container/Container';
import { LinkWithPrevPageState } from './components/LinkWithPrevPageState/LinkWithPrevPageState';
import './App.css';

const Homepage = lazy(() => import('./pages/Homepage'));
const PostPage = lazy(() => import('./pages/Post'));
const ErrorPage = lazy(() => import('./pages/Error'));

function App() {
  return (
    <Routes>
      <Route path={PAGE_NAMES.homepage} element={<MainLayout />}>
        <Route index element={<Homepage />} />
        <Route
          path="/post"
          element={
            <Container>
              <LinkWithPrevPageState
                style={{ color: '#fff' }}
                to={generatePath(PAGE_NAMES.post, { id: 11116274 })}
              >
                Go to post
              </LinkWithPrevPageState>
            </Container>
          }
        />
        <Route path={PAGE_NAMES.post} element={<PostPage />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="*" element={<Navigate to="/error" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
