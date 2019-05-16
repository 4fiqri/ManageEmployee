import React,{Component} from 'react'
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation'
import Register from '../screens/RegisterPage'
import EmployeeDetailScreen from '../screens/EmployeeDetailScreen'
import EditEmployee from '../screens/EditEmployeeScreen';
import Menu from '../screens/MenuStack';
import MenuAccountSetting from '../screens/MenuAccountSetting'
import AddEmployee from '../screens/AddEmployeScreen';
import LoginScreen from '../screens/LoginScreen';
import ListEmployee from '../screens/ListEmployeeScreen'

const AccountSetting = createStackNavigator({
    menu : MenuAccountSetting,

})

const StackBeranda = createStackNavigator({
    MenuStack : Menu,
    add : AddEmployee,
    edit : EditEmployee,
    list : ListEmployee,
    detail : EmployeeDetailScreen
},{
    headerMode : 'none'
})

StackBeranda.navigationOptions = ({navigation}) => {
    let tabBarVisible = false

    let routeName =navigation.state.routes[navigation.state.index].routeName
    if(routeName == 'MenuStack'){
        tabBarVisible = true
    }
    return{
        tabBarVisible
    }
}

const HomeTab =createBottomTabNavigator({
    beranda : StackBeranda,
    account : AccountSetting
},{
    tabBarPosition : 'bottom',
    account : AccountSetting
})

const StackRoot = createStackNavigator({
    login : LoginScreen,
    register : Register,
    home : HomeTab
},{
    headerMode : 'none',
    // initialRouteName : 'home'
})

export const StackContainer = createAppContainer(StackRoot)