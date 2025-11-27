import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import VideoList from "./src/screens/VideoList";
import VideoPlayer from "./src/screens/VideoPlayer";

export type RootStackParamList = {
  VideoList: undefined;
  VideoPlayer: { videoUrl: string };
};


const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="VideoList" component={VideoList} />
        <Stack.Screen name="VideoPlayer" component={VideoPlayer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
