

import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Layout from './Components/Layout';
import HabitTracker from './Components/HabitTracker';
import LessonPage from './Components/LessonPage';
import Landing from './Components/Landing';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Landing />  },
      { path: '/login', element: <Login /> },
      { path: '/dashboard', element: <HabitTracker /> },
      { path: '/signup', element: <Signup /> },
      { path: '/lesson/:day', element: <LessonPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;