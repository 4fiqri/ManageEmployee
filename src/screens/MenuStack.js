import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
} from "react-native";
import { Container, Header, Content,Body, Title } from 'native-base';


class Menu extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title style={{marginLeft:15}}>Home</Title>                        
                    </Body>
                </Header>
                <Content>
                    {/* <View style={styles.container}> */}
                        <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:100, marginHorizontal:20}}>
                            <TouchableHighlight onPress={() => this.props.navigation.navigate('add')} style={{height :100, width:100, borderWidth:3, borderColor: 'pink'}}>
                                <Text>Add Employee</Text>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={() => this.props.navigation.navigate('edit')} style={{height :100, width:100, borderWidth:3, borderColor: 'purple'}}>
                                <Text>Edit Employee</Text>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={() => this.props.navigation.navigate('list')} style={{height :100, width:100, borderWidth:3, borderColor: 'green'}}>
                                <Text>List Employee</Text>
                            </TouchableHighlight>
                        </View>              
                    {/* </View> */}
                </Content>
            </Container>
            
        );
    }
}
export default Menu;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});