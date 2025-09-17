import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { createHashRouter, RouterProvider } from 'react-router-dom';
import Layout from './Component/Layout/Layout';
import Setting from './Component/Setting/Setting';
import User from './Component/User/User';

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <User /> },
      { path: 'Setting', element: <Setting /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
