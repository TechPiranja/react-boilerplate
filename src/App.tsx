import Layout from './navigation/Layout';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Layout>
          <div>Hello world!</div>
        </Layout>
      )
    },
    {
      path: '/home',
      element: (
        <Layout>
          <div>This is home!</div>
        </Layout>
      )
    },
    {
      path: '/about',
      element: (
        <Layout>
          <div>This is about!</div>
        </Layout>
      )
    },
    {
      path: '/contact',
      element: (
        <Layout>
          <div>This is contact!</div>
        </Layout>
      )
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
