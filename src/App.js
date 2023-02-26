import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import Landing from './pages/Landing';
import { createContext, useState } from 'react';
import { CssBaseline } from '@mui/material';
import SideNavBar from './components/SideNavBar';
import Dashboard from './pages/Dashboard';
import ManageItem from './pages/menu/ManageItem';
import ManageMenu from './pages/menu/ManageMenu';
import AddItem from './pages/menu/AddItem';
import AddMenu from './pages/menu/AddMenu';
import Discount from './pages/Discount'
import EditItem from './pages/menu/EditItem';
import EditMenu from './pages/menu/EditMenu';

// TODO: turn the routes into a RouteList.json
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/landing",
    element: <Landing />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "discount",
        element: <Discount />,
      },
      {
        path: "manageitem",
        element: <ManageItem />,
      },
      {
        path: "managemenu",
        element: <ManageMenu />,
      },
      {
        path: "additem",
        element: <AddItem />,
      },
      {
        path: "addmenu",
        element: <AddMenu />,
      }, ,
      {
        path: "edititem",
        element: <EditItem />,
      },
      {
        path: "editmenu",
        element: <EditMenu />,
      },
    ]
  },
]);

export const LoginContext = createContext();

function App() {
  const [isLogin, setIsLogin] = useState(window.sessionStorage.getItem('accessToken') !== null)
  // TODO: add custom theme
  // add custom colors for background, text, primary button and alert button
  // add custom font
  // use more useCallback, useMemo, useContext
  return (
    <LoginContext.Provider value={{ isLogin: isLogin, setIsLogin: setIsLogin }}>
      <CssBaseline />
      <RouterProvider router={router} />
    </LoginContext.Provider >
  );
}

export default App;
