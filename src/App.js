import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Post from './pages/Post';
import { ErrorPage } from './pages/Error';
import { PAGE_NAMES } from './router/paths';
import { MainLayout } from './Layouts/MainLayout';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path={PAGE_NAMES.homepage} element={<MainLayout />}>
        <Route index element={<Homepage />} />
        <Route path="/post" element={<>Post</>} />
        <Route path={PAGE_NAMES.post} element={<Post />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
