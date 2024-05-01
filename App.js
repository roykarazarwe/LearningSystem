import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import SplashScreen from "./Screens/SplashScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import LoginScreen from "./Screens/LoginScreen";
import SignUpScreen from "./Screens/SignUpScreen";
import DashboardScreen from './Screens/DashboardScreen';
import SubscribeScreen from "./Screens/SubscribeScreen";
import PaymentScreen from "./Screens/PaymentScreen";
import Pesapal from './Screens/Pesapal';


// import VideoLink from './Screens/VideoLinkScreen';
// import VideoScreen from './Screens/VideoScreen';
// import TrialVideo from './Screens/TrialVideo';

export default function App() {
  const Stack = createStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DashboardScreen"
          component={DashboardScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Subscribe"
          component={SubscribeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Payment"
          component={PaymentScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="pesapal"
          component={Pesapal}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{
            headerShown: false,
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
      {/* <Stack.Navigator initialRouteName="Video">
        <Stack.Screen name="VideoLink" component={VideoLink} />
        <Stack.Screen name="VideoScreen" component={VideoScreen} />
        <Stack.Screen name="TrialVideo" component={TrialVideo} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );

}

// export default App;