import React from 'react';
import { Provider } from 'react-redux';
import store from './app/redux/store';
import MainNavigation from './app/index';
import { ThemeProvider } from './app/context/ThemeContext';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <MainNavigation />
      </ThemeProvider>
    </Provider>
  );
};

export default App;