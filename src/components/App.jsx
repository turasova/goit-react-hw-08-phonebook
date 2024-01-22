import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Loader } from './Loader/loader';
import { PrivateRoute, RegistrationRoute } from './PrivateRoutes/PrivateRoute';

const HomePage = lazy(() => import('./Pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('./Pages/ContactsPage/ContactsPage'));
const LoginPage = lazy(() => import('./Pages/LoginPage'));
const RegistrationPage = lazy(() => import('./Pages/RegistrationPage'));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/registration"
            element={
              <RegistrationRoute>
                <RegistrationPage />
              </RegistrationRoute>
            }
          />
          <Route
            path="/login"
            element={
              <RegistrationRoute>
                <LoginPage />
              </RegistrationRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
