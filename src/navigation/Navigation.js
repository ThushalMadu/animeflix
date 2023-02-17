import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import FirstScreen from '../screens/FirstScreen';
import AiringView from '../screens/AiringView';
import CompleteView from '../screens/CompleteView';
import UpcomingView from '../screens/UpcomingView';
import FavouriteView from '../screens/FavouriteView';
import DetailView from '../screens/DetailView';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function TabAScreen() {
  return (
    <Stack.Navigator screenOptions={{ header: () => null }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailView" component={DetailView} />
    </Stack.Navigator>
  );
}
function TabBScreen() {
  return (
    <Stack.Navigator screenOptions={{ header: () => null }}>
      <Stack.Screen name="CompleteView" component={CompleteView} />
      <Stack.Screen name="DetailView" component={DetailView} />
    </Stack.Navigator>
  );
}
function TabCScreen() {
  return (
    <Stack.Navigator screenOptions={{ header: () => null }}>
      <Stack.Screen name="UpcomingView" component={UpcomingView} />
      <Stack.Screen name="DetailView" component={DetailView} />
    </Stack.Navigator>
  );
}
function FavouriteLists() {
  return (
    <Stack.Navigator screenOptions={{ header: () => null }}>
      <Stack.Screen name="FavouriteView" component={FavouriteView} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailView" component={DetailView} />
    </Stack.Navigator>
  );
}


function TabFullNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        header: () => null,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'black',
        },
      }}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Airing',
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#fff',
          tabBarActiveTintColor: '#B69769',
          tabBarIcon: ({ focused, color }) => (
            <MaterialIcons
              name={focused ? 'live-tv' : 'live-tv'}
              size={25}
              color={color}
            />
          ),
        }}
        name="Airing"
        component={TabAScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Complete',
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#fff',
          tabBarActiveTintColor: '#B69769',
          tabBarIcon: ({ focused, color }) => (
            <FontAwesome
              name={focused ? 'compress' : 'compress'}
              size={25}
              color={color}
            />
          ),
        }}
        name="Complete"
        component={TabBScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Upcoming',
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#fff',
          tabBarActiveTintColor: '#B69769',
          tabBarIcon: ({ focused, color }) => (
            <FontAwesome
              name={focused ? 'subway' : 'subway'}
              size={25}
              color={color}
            />
          ),
        }}
        name="Upcoming"
        component={TabCScreen}
      />
    </Tab.Navigator>
  );
}

function DrawerNavigations() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
      <Drawer.Screen name="Home" component={TabFullNavigation} />
      <Drawer.Screen name="FavouriteLists" component={FavouriteLists} />
    </Drawer.Navigator>
  );
}
const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ header: () => null }}>
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="DrawerNavigations" component={DrawerNavigations} />
        <Stack.Screen name="DetailView" component={DetailView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default Navigator;

const styles = StyleSheet.create({

})