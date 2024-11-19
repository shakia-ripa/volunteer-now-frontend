import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root/Root.jsx';
import Home from './pages/Home/Home/Home.jsx';
import AboutUs from './pages/AboutUs/AboutUs.jsx';
import Events from './pages/Events/Events.jsx';
import Blog from './pages/Blog/Blog.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import Admin from './pages/Admin/Admin/Admin.jsx';
import VolunteerRegister from './pages/Admin/VolunteerRegister/VolunteerRegister.jsx';
import AddEvent from './pages/Admin/AddEvent/AddEvent.jsx';
import { HelmetProvider } from 'react-helmet-async';
import EventList from './pages/Admin/EventList/EventList.jsx';
import EventDetails from './components/EventDetails/EventDetails.jsx';
import ApplyForm from './pages/ApplyForm/ApplyForm.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/events',
        element: <Events></Events>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }, 
      {
        path: '/event/:id',
        element: <EventDetails></EventDetails>
      }
    ]
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/register',
    element: <Register></Register>
  },
  {
    path: '/apply-form',
    element: <ApplyForm></ApplyForm>
  },
  {
    path: '/admin',
    element: <Admin></Admin>,
    children: [
      {
        path: '/admin/add-event',
        element: <AddEvent></AddEvent>
      },
      {
        path: '/admin/event-list',
        element: <EventList></EventList>
      },
      {
        path: '/admin/volunteer-register',
        element: <VolunteerRegister></VolunteerRegister>
      },

    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>,
)
