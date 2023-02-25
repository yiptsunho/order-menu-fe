import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import Landing from './pages/Landing';
import { createContext, useState } from 'react';
import NavBar from './components/NavBar';
import { CssBaseline } from '@mui/material';

// TODO: turn the routes into a RouteList.json
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/landing",
    element: <Landing />,
  },
]);

export const LoginContext = createContext();

function App() {
  const [isLogin, setIsLogin] = useState(window.sessionStorage.getItem('accessToken') !== null)

  return (
    <LoginContext.Provider value={{ isLogin: isLogin, setIsLogin: setIsLogin }}>
      <CssBaseline />
      {isLogin ? <NavBar /> : null}
      <RouterProvider router={router} />
    </LoginContext.Provider >
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
