import React, { useEffect } from 'react';
import { Appearance } from 'react-native';
import { Provider, useDispatch } from 'react-redux';
import store, { persistor } from './app/redux/store';
import MainNavigation from './app/index';

import { PersistGate } from 'redux-persist/integration/react';
import { updateThemeToSystem } from './app/redux/slices/themeSlice';

const AppContent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      dispatch(updateThemeToSystem()); 
    });

   
    dispatch(updateThemeToSystem());

    return () => subscription.remove();
  }, [dispatch]);

  return (
    
      <MainNavigation />
   
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppContent />
      </PersistGate>
    </Provider>
  );
};

export default App;