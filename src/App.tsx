import React from 'react';
import { Provider } from 'react-redux';
import store, { persistor } from './app/redux/store';
import MainNavigation from './app/index';
import { ThemeProvider } from './app/context/ThemeContext';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider>
        <MainNavigation />
      </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;





