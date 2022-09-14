import { Layout } from './Layout';
import { LoginPage } from 'pages/LoginPage';
import { Route, Routes, Navigate } from 'react-router-dom';

export const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
