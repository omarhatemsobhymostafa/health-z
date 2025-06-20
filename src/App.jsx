

import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Layout from './Components/Layout';
import HabitTracker from './Components/HabitTracker';
import LessonPage from './Components/LessonPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <HabitTracker />  },
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <Signup /> },
      { path: '/lesson/:day', element: <LessonPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;