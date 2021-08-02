import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import RealtimeObjectDetection from '../screens/RealtimeObjectDetection';
import Header  from "../shared/header";

const screens = {
    RealtimeObjectDetection: {
        screen: RealtimeObjectDetection,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Real SonGil' />,
            }
        }
    }
}

const RealtimeObjectDetectionStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 100}
    }
});

export default RealtimeObjectDetectionStack;