import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useColorScheme } from 'react-native';
import colors from '../colors';
import Movies from '../screens/Movies';
import Search from '../screens/Search';
import Tv from '../screens/Tv';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const isDark = useColorScheme() === 'dark';

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: isDark
          ? colors.tint_darkmode
          : colors.tint_lightmode,
        tabBarInactiveTintColor: isDark
          ? colors.inactive_darkmode
          : colors.inactive_lightmode,
        tabBarStyle: {
          backgroundColor: isDark
            ? colors.bgColor_darkmode
            : colors.bgColor_lightmode,
        },
        headerStyle: {
          backgroundColor: isDark
            ? colors.bgColor_darkmode
            : colors.bgColor_lightmode,
        },
        headerTitleStyle: {
          color: isDark ? colors.bgColor_lightmode : colors.bgColor_darkmode,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
          margin: -3,
        },
      }}
    >
      <Tab.Screen
        name="Movies"
        component={Movies}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="film-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="TV"
        component={Tv}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="tv-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="search-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
