# Welcome to the React Native Notes :))

This is a repository for the React Native self learning.

## Creating a React Native Project

- First, create a project with the following command line `npx react-native init --project name`.
- CD to the project directory
- Start the project by running `npx react-native start`. Then run `npx react-native run-android`.

## Creating React Native Navigation/Router

- Install the React Native Navigation Library by running `npm install @react-navigation/native`.
- Install the dependencies by running `npm install react-native-screens react-native-safe-area-context`.
- Wrapping your App with NavigationController.

```

import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';
const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};
export default App;
const styles = StyleSheet.create({});

```

- Create a button for navigation. `onPress={() => navigation.navigate('Register')}`
