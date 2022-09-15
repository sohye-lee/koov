import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, TouchableOpacity, View } from 'react-native';

const ScreenOne = () => (
  <View>
    <Text>One</Text>
  </View>
);

const ScreenTwo = () => (
  <View>
    <Text>Two</Text>
  </View>
);

const ScreenThree = ({ navigation: { navigate } }) => (
  <TouchableOpacity onPress={() => navigate('Tabs', { screen: 'Search' })}>
    <Text>Search</Text>
  </TouchableOpacity>
);

const NativeStack = createNativeStackNavigator();

export default Stack = () => {
  return (
    <NativeStack.Navigator>
      <NativeStack.Screen name="Page1" component={ScreenOne} />
      <NativeStack.Screen name="Page2" component={ScreenTwo} />
      <NativeStack.Screen name="Page3" component={ScreenThree} />
    </NativeStack.Navigator>
  );
};
