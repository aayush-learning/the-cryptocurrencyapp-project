import { Animated, Easing } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import MainScreen from '../screens/MainScreen/MainScreen';
import CCGrid from '../screens/CCGrid/CCGrid';
import CCDataView from '../screens/CCDetailView/CCDetailView';

const transitionConfig = () => {

    return {

        transitionSpec: {

            duration: 400,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
            useNativeDriver: true,
        },
        screenInterpolator: sceneProps => {

            const { layout, position, scene } = sceneProps;

            const thisSceneIndex = scene.index;
            const width = layout.initWidth;

            const translateX = position.interpolate({

                inputRange: [thisSceneIndex - 1, thisSceneIndex],
                outputRange: [width, 0],
            });

            return { transform: [{ translateX }] };
        },
    };
};

const AppNavigator = new createStackNavigator({

    MainScreen: {

        screen: MainScreen
    },
    CCGrid: {

        screen: CCGrid
    },
    CCDataView: {
        
        screen: CCDataView
    }

}, {


    headerMode: 'none',
    navigationOptions: {

        gesturesEnabled: true
    },
    transitionConfig
});

export default AppNavigator;