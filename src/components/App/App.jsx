import {Routes, Route} from 'react-router-dom';
import {lazy, Suspense} from 'react';
import {Loader} from "../Loader";
import PublicRoute from "../../Routes/PublicRoute";
import PrivateRoute from "../../Routes/PrivateRoute";

const AuthView = lazy(() => import('../../views/AuthView/AuthView'));
const ContentView = lazy(() => import('../../views/ContentView/ContentView'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute
                component={
                  <Suspense fallback={<Loader/>}>
                    <AuthView/>
                  </Suspense>
                }
              />
            }
          />
          <Route
            path="/content"
            element={
              <PrivateRoute
                component={
                  <Suspense fallback={<Loader/>}>
                    <ContentView/>
                  </Suspense>
                }
              />
            }
          />
        </Routes>
      </Suspense>
    </>
  );
};
