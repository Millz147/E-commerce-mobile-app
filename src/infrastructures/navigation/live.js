import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import { colors } from '../theme';
import { Main } from '../../features/screens/live';

const Tab = createMaterialBottomTabNavigator();

export const LiveNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      activeColor={colors.primary}
      inactiveColor={colors['grey-2']}
      barStyle={{ backgroundColor: colors.white }}
    
    >
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          tabBarLabel: false,
          //   tabBarLabel: 'Main',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={Main}
        options={{
          tabBarLabel: false,
          //   tabBarLabel: 'Main',
          tabBarIcon: ({ color }) => (
            <Feather name="search" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Main}
        options={{
          tabBarLabel: false,
          //   tabBarLabel: 'Main',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="cards-heart-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Bag"
        component={Main}
        options={{
          tabBarLabel: false,
          //   tabBarLabel: 'Main',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="bag-personal"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Main}
        options={{
          tabBarLabel: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-circle"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
