// import React, { Component } from "react";
// import { 
//     View,
//     Text,
//     StyleSheet,
//     Button
// } from "react-native";
// import MapView, { Marker } from 'react-native-maps';

// const styles = StyleSheet.create({
//     container: {
//       ...StyleSheet.absoluteFillObject,
//       flex : 1
//     },
//     map: {
//       ...StyleSheet.absoluteFillObject,
//     },
//    });


// class EmployeeDetailScreen extends Component {
//     state={location:null}

//     onBtnClick = () => {
//         navigator.geolocation.getCurrentPosition(value => {
//             console.log(value)
//             this.setState({location :{
//                 latitude: value.coords.latitude,
//                 longitude: value.coords.longitude,
//                 latitudeDelta: 0.015,
//                 longitudeDelta: 0.0121,
//             }})
//         }, err => {
//             console.log(err)
//         })
//     }    

//     render() {
//         const obj = this.state.location ? this.state.location : initial
//         return (
//             <View style={styles.container}>
//                 <View style={{marginTop:30,zIndex:1}} >
//                     <Button title='Get Current Location' onPress={this.onBtnClick} />
//                 </View>
//                 <MapView
//                 style={styles.map}
//                 region={obj}>
//                 <Marker coordinate={obj} />
//                 </MapView>
//             </View>
//         );
//     }
// }
// export default EmployeeDetailScreen;

import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button, Alert
} from "react-native";
import { Fire } from '../support/firebase'
import { connect } from 'react-redux'
import { Container, Body, Title, Content,Header, Label, Item, Input} from "native-base";



class EmployeeDetailScreen extends Component {

    onBtnDel = (idUser) => {
        Alert.alert('Delete Data', 'yakin akan menghapus ?',[{text:'Yes', onPress: () => this.onYakinDel(idUser)}, {text : 'No'}])
    }

    onYakinDel = (idUser) => {
        Fire.database().ref(`manager/users${this.props.id}/employee/${idUser}`).remove()
        .then((res) => {
            alert('Data Berhasil Dihapus')
            this.props.navigation.navigate('list')
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render() {
        const {getParam} =this.props.navigation
        return (
            <Container>
                <Header>
                    <Body>
                        <Title style={{marginLeft:15}}>Detail Data Employee</Title>
                    </Body>
                </Header>
                <Content>
                    <View style={styles.container}>
                        <Item>
                            <Label>Nama  :</Label>
                            <Input>{getParam('nama')}</Input>
                        </Item>
                        <Item>
                            <Label>Shift     :</Label>
                            <Input>{getParam('shift')}</Input>
                        </Item>
                        <Item>
                            <Label>Phone  :</Label>
                            <Input>{getParam('phone')}</Input>
                        </Item>
                        <Input/>
                        
                        <Button title='Delete' onPress={() => this.onBtnDel(getParam('idUser'))} style={{marginTop :20, marginHorizontal:15}} block/>
                    </View>
                </Content>
            </Container>
           
        );
    }
}

const mapSTateToProps = (state) => {
    return{
      id: state.auth.id
    }
  }
  
  export default connect(mapSTateToProps)(EmployeeDetailScreen)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});