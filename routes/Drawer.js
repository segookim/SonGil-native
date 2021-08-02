import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import HomeStack from './HomeStack';
import AboutStack from './AboutStack';
import RealtimeObjectDetectionStack from './RealtimeObjectDetectionStack'



const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack,
    },
    RealtimeObjectDetection: {
        screen: RealtimeObjectDetectionStack,
    },
    About: {
        screen: AboutStack,
    },
    
});

export default createAppContainer(RootDrawerNavigator);