import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Root from './Layout/Root/Root.jsx';
import Home from './pages/Home/Home/Home.jsx';
import AboutUs from './pages/AboutUs/AboutUs.jsx';
import Events from './pages/Events/Events.jsx';
import Blog from './pages/Blog/Blog/Blog.jsx'
import BlogDetail from './pages/Blog/BlogDetails/BlogDetails.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import Admin from './pages/Admin/Admin/Admin.jsx';
import AddEvent from './pages/Admin/AddEvent/AddEvent.jsx';
import EventList from './pages/Admin/EventList/EventList.jsx';
import EventDetails from './components/EventDetails/EventDetails.jsx';
import ApplyForm from './pages/ApplyForm/ApplyForm.jsx';
import AppliedList from './pages/Admin/AppliedList/AppliedList.jsx';
import UserList from './pages/Admin/UserList/UserList.jsx';
import ApplicantDetails from './pages/Admin/ApplicantDetails/ApplicantDetails.jsx';
import User from './pages/User/User/User.jsx';
import MyEvents from './pages/MyEvents/MyEvents.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import Unauthorized from './components/Unauthorized/Unauthorized.jsx';
import PrivateRoute from './Routes/PrivateRoute.jsx';

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
      },
      {
        path: '/blog/:id',
        element: <BlogDetail></BlogDetail>
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
    path: '/apply-form/:eventId',
    element: <ApplyForm></ApplyForm>
  },
  {
    path: '/admin',
    element: <PrivateRoute requiredRole='admin'><Admin></Admin></PrivateRoute>,
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
        path: '/admin/applied-list',
        element: <AppliedList></AppliedList>
      },
      {
        path: '/admin/user-list',
        element: <UserList></UserList>
      },
      {
        path: '/admin/applied-list/applicant-details/:id',
        element: <ApplicantDetails></ApplicantDetails>
      }

    ]
  },
  {
    path: '/user',
    element: <PrivateRoute requiredRole='user'><User></User></PrivateRoute>,
    children: [
      {
        path: '/user/my-events',
        element: <MyEvents></MyEvents>
      }
    ]
  },
  {
    path: '/unauthorized',
    element: <Unauthorized></Unauthorized>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </StrictMode>,
)
