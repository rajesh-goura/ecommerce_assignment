import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, useColorScheme, Image } from 'react-native';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ThemeProvider, useThemeContext } from './context/ThemeContext';

import SignIn from './screens/SignIn';
import HomePage from './screens/HomePage';
import UserDetails from './screens/UserDetails';
import OrdersScreen from './screens/OrderScreen';
import AnotherScreen from './screens/BellScreen'; 

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconSource;

          switch (route.name) {
            case 'Home':
              iconSource = require('./assets/icons/Frame 50.png');
              break;
            case 'Profile':
              iconSource = require('./assets/icons/Frame 53.png');
              break;
            case 'Orders':
              iconSource = require('./assets/icons/Frame 52.png');
              break;
            case 'Another':
              iconSource = require('./assets/icons/Frame 54.png');
              break;
            default:
              iconSource = require('./assets/icons/Frame 50.png');
          }

          return <Image source={iconSource} style={{ width: size+15, height: size+15, tintColor: color }} />;
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor:'#8E6CEF',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle:{
          height:70,
          paddingTop:15,
        }
        
      })}
      
    >
      <Tab.Screen name="Home" component={HomePage} options={{headerShown:false}}/>
      <Tab.Screen name="Profile" component={UserDetails} />
      <Tab.Screen name="Orders" component={OrdersScreen} />
      <Tab.Screen name="Another" component={AnotherScreen} />
    </Tab.Navigator>
  );
};

const MainNavigation = () => {
  const { token } = useAuth();
  const deviceTheme = useColorScheme();
  const { theme } = useThemeContext();

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {token ? (
          <Stack.Screen name="MainTabs" component={MainTabs} />
        ) : (
          <Stack.Screen name="Login" component={SignIn} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainNavigation;