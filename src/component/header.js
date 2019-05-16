import React from 'react'
import { View, Text } from 'react-native'
import styles from './headerStyle';

class Header extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Todo App</Text>
            </View>
        )
    }
}

export default Header