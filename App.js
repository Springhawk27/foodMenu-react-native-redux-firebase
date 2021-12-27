import React, { createRef } from 'react'
import AppNavigator from './app/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './app/redux/store';

const navigationRef = createRef();

export const navigate = (name, params) => {
  navigationRef.current && navigationRef.current.navigate(name, params);
}


export default function App() {
  return (
    <NavigationContainer ref={navigationRef} >
      <Provider store={store}  >
        <AppNavigator></AppNavigator>
      </Provider>
    </NavigationContainer>
  );
}

