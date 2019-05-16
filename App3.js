import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from "./src/screens/HomeScreen";

class HomePage extends Component {
    handleButton = () => {
        this.props.navigation.navigate('login')
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>HomePage</Text>
                <Button title='Ke Halaman Login' onPress={this.handleButton}/>
            </View>
        );
    }
}

class LoginPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Login Page</Text>
            </View>
        );
    }
}

const stack = createStackNavigator({
    home : {
        screen : HomeScreen,
        navigationOptions : {
            title : 'HOME'
        }
    },
    login : LoginPage
}, {
    initialRouteName : 'home'
})

const stackContainer = createAppContainer(stack)

export default stackContainer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});