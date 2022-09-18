import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { Text, Image, useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Asset, useAssets } from 'expo-asset';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import Tabs from './navigation/Tabs';
import Root from './navigation/Root';
import { ThemeProvider } from 'styled-components/native';
import { darkTheme, lightTheme } from './styled';

const loadFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));
const loadAssets = (images) =>
  images.map((image) => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.loadAsync(image);
    }
  });

export default function App() {
  const [ready, setReady] = useState(false);
  const onFinish = () => setReady(true);
  const startLoading = async () => {
    const fonts = loadFonts([Ionicons.font]);
    const images = loadAssets([require('./kovie.svg')]);
    await Promise.all([...fonts, ...images]);
  };
  const isDark = useColorScheme() === 'dark';

  // const [assets] = useAssets([require('./kovie.jpg')]);
  // const [loaded] = Font.useFonts(Ionicons.font);
  if (!ready) {
    return (
      <AppLoading
        startAsync={startLoading}
        onFinish={onFinish}
        onError={console.error}
        
      />
    );
  }
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </ThemeProvider>
  );
}
