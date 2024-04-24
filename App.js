import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import VideoLink from './Screens/VideoLinkScreen';
import VideoScreen from './Screens/VideoScreen';
import TrialVideo from './Screens/TrialVideo';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouetName="Video">
        <Stack.Screen name="VideoLink" component={VideoLink} />
        <Stack.Screen name="VideoScreen" component={VideoScreen} />
        <Stack.Screen name="TrialVideo" component={TrialVideo} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}
