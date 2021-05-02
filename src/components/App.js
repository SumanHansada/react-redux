import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Spinner from './common/Spinner';
import Header from './common/Header';
import 'react-toastify/dist/ReactToastify.css';
const ManageCoursePage = lazy(() => import('./courses/ManageCoursePage')); // eslint-disable-line import/no-named-as-default
const HomePage = lazy(() => import('./home/HomePage'));
const CoursesPage = lazy(() => import('./courses/CoursesPage'));
const AboutPage = lazy(() => import('./about/AboutPage'));
const PageNotFound = lazy(() => import('./PageNotFound'));

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/about" component={AboutPage}></Route>
          <Route path="/courses" component={CoursesPage}></Route>
          <Route path="/course/:slug" component={ManageCoursePage}></Route>
          <Route path="/course" component={ManageCoursePage}></Route>
          <Route component={PageNotFound}></Route>
        </Switch>
      </Suspense>
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
}

export default App;
