import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Splash, GetStarted, Register, Login, UploadPhoto} from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    // stacking which pages should return first
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UploadPhoto"
        component={UploadPhoto}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
