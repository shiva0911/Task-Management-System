import React, { useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from './them/darkthem';
import Navbar from './page/Navbar/Navbar';
import Home from './page/Home/Home';
import Auth from './page/Auth/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTask } from './ReduxToolKit/TaskSlice';
import { getUserProfile } from './ReduxToolKit/AuthSlice';

function App() {
  const dispatch = useDispatch();
  const { auth } = useSelector(store => store);

  useEffect(() => {
    if (auth.jwt) {
      dispatch(fetchTask({}));
      dispatch(getUserProfile(auth.jwt || localStorage.getItem("jwt")));
    }
  }, [auth.jwt, dispatch]);

  if (auth.user) {
    return (
      <ThemeProvider theme={darkTheme}>
        <div>
          <Navbar />
          <Home />
        </div>
      </ThemeProvider>
    );
  }

    return (
    <ThemeProvider theme={darkTheme}>
      <Auth />
    </ThemeProvider>
  );
}

export default App;
