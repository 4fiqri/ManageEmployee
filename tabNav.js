import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome'
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from './src/screens/LoginScreen'


const Tab = createMaterialTopTabNavigator({
    home : {
        screen : HomeScreen,
        navigationOptions : {
            title : 'HOME',
            tabBarIcon : ({tintColor}) => <Icon name='home' color={tintColor} size={24}/>
        }
    },
    login : {
        screen : LoginScreen,
        navigationOptions : {
            title : 'LOGIN',
            tabBarIcon : ({tintColor}) => <Icon name='sign-in' color={tintColor} size={24}/>
        }
    }
}, {
    tabBarPosition : 'bottom',
    tabBarOptions : {
        showIcon : true,
        activeTintColor : 'orange',
        style : {
            backgroundColor : 'grey'
        },
        indicatorStyle : {
            position : 'absolute',
            top : 0
        }
    }
})

const TabContainer = createAppContainer(Tab)

class LatihanIcon extends Component {
    render() {
        console.disableYellowBox = true
        return (
            <TabContainer/>
        );
    }
}
export default LatihanIcon;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});