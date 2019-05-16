// import React, { Component } from "react";
// import { 
//     View,
//     Text,
//     StyleSheet,
//     Image
// } from "react-native";
// import { createDrawerNavigator, DrawerItems,createAppContainer } from 'react-navigation'
// import HomeScreen from "./src/screens/ListEmployeeScreen";
// import LoginScreen from "./src/screens/LoginScreen";

// const CustorDrawer = (props) => {
//     return(
//         <View style={{flex:1}}>
//             <View style={{alignItems:'center', justifyContent:'center', height:80, backgroundColor:'#2ecc71'}}>
//                 {/* <Text>IMage</Text> */}
//                 <Image style={{width:50, height:50, marginTop:5, marginLeft:5,marginBottom:5}} source={{uri : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvdGEln6V8ZtPE-UIBOeTP1B8D4XMqFHguXK-HnId8QL6-HhFY" }} />
//             </View>
//             <DrawerItems {...props}/>
//         </View>
//     )
// }

// const Drawer = createDrawerNavigator({
//     home : HomeScreen,
//     login : LoginScreen
// },{
//     contentComponent : CustorDrawer
// })

// const DrawerContainer = createAppContainer(Drawer)

// class Hello extends Component {
//     render() {
//         return (
//             <DrawerContainer/>
//         );
//     }
// }
// export default Hello;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     }
// });