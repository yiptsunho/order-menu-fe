import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Login from './pages/Login';
import Landing from './pages/Landing';
import { createContext, useState } from 'react';
import { CssBaseline } from '@mui/material';
import Dashboard from './pages/dashboard/Dashboard';
import ManageItem from './pages/menu/ManageItem';
import ManageMenu from './pages/menu/ManageMenu';
import AddItem from './pages/menu/AddItem';
import AddMenu from './pages/menu/AddMenu';
import Discount from './pages/Discount'
import EditItem from './pages/menu/EditItem';
import EditMenu from './pages/menu/EditMenu';
import NavBar from './components/NavBar';
import SideNavBar from './components/SideNavBar';

// TODO: turn the routes into a RouteList.json
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Login />,
//   },
//   {
//     path: "/landing",
//     element: <Landing />,
//   },
//   {
//     path: "dashboard",
//     element: <Dashboard />,
//   },
//   {
//     path: "discount",
//     element: <Discount />,
//   },
//   {
//     path: "manageitem",
//     element: <ManageItem />,
//   },
//   {
//     path: "managemenu",
//     element: <ManageMenu />,
//   },
//   {
//     path: "additem",
//     element: <AddItem />,
//   },
//   {
//     path: "addmenu",
//     element: <AddMenu />,
//   }, ,
//   {
//     path: "edititem",
//     element: <EditItem />,
//   },
//   {
//     path: "editmenu",
//     element: <EditMenu />,
//   },
// ]);

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
  // find a better font
  return (
    <LoginContext.Provider value={{ isLogin: isLogin, setIsLogin: setIsLogin }}>
      <CssBaseline />
      <RouterProvider router={router} />
      {/* <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/landing" element={<Landing />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/discount" element={<Discount />} />
        <Route exact path="/manageitem" element={<ManageItem />} />
        <Route exact path="/managemenu" element={<ManageMenu />} />
        <Route exact path="/additem" element={<AddItem />} />
        <Route exact path="/addmenu" element={<AddMenu />} />
        <Route exact path="/edititem" element={<EditItem />} />
        <Route exact path="/managemenu" element={<EditMenu />} />
      </Routes> */}
    </LoginContext.Provider >

  );
}

export default App;
