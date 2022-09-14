import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
const ScreenOne = () => {
  <View>
    <Text>One</Text>
  </View>;
};
const ScreenTwo = () => {
  <View>
    <Text>Two</Text>
  </View>
};
const ScreenThree = () => {
  <View>
    <Text>Three</Text>
  </View>;
};

const NativeStack = createNativeStackNavigator();
const Stack = () => {
  return (
    <NativeStack.Navigator>
      <NativeStack.Screen name="Page1" component={ScreenOne} />
      <NativeStack.Screen name="Page2" component={ScreenTwo} />
      <NativeStack.Screen name="Page3" component={ScreenThree} />
    </NativeStack.Navigator>
  );
};
