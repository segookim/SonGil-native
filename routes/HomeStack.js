import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import Home from '../screens/Home';
import Header  from "../shared/header";

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='SonGil' />,
            }
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 100}
    }
});

export default HomeStack;