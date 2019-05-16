// import React from 'react'
// import { View, Text } from 'react-native'

// class App extends React.Component {
//   render(){
//     return(
//       // <View style={{backgroundColor : 'pink', flexDirection : 'column', justifyContent : 'center', alignItems : 'center', flex : 1}}>
//       //   <Text>Hello World</Text>
//       // </View>
//       <View style={{flex: 1}}>
//         <View style={{height : 100, backgroundColor : 'blue', flex : 1, flexDirection : 'row', justifyContent : 'flex-end'}}>
//           <View style={{height : 30, width : 30 ,backgroundColor : 'red', borderRadius : 30, marginVertical : 20}}></View>
//           <View style={{height : 30, width : 30 ,backgroundColor : 'green', borderRadius : 30, marginVertical : 20}}></View>
//         </View>
//         <View style={{height : 100, backgroundColor : 'white', flex : 6}}></View>

//         {/* ==================== NAVBAR BOTTOM ==================== */}
//         <View style={{height : 100, backgroundColor : 'blue', flex : 1, flexDirection: 'row', justifyContent : 'center', alignItems: 'center'}}>
//           <View style={{height: 30, width : 30, backgroundColor : 'grey', flex : 1, marginHorizontal : 10}}></View>
//           <View style={{height: 30, width : 30, backgroundColor : 'grey', flex : 1, marginHorizontal : 10}}></View>
//           <View style={{height: 30, width : 30, backgroundColor : 'grey', flex : 1, marginHorizontal : 10}}></View>
//           <View style={{height: 30, width : 30, backgroundColor : 'grey', flex : 1, marginHorizontal : 10}}></View>
//           <View style={{height: 30, width : 30, backgroundColor : 'grey', flex : 1, marginHorizontal : 10}}></View>
//         </View>
//       </View>
//     )
//   }
// }

// export default App


import React, {Component} from 'react'
import { StackContainer } from './src/routes/stackRoot'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import Reducer from './src/1.reducers'
import Reduxthunk from 'redux-thunk'

const store =createStore(Reducer,{}, applyMiddleware(Reduxthunk))

class App extends Component{
  render(){
    return(
      <Provider store={store}>
        <StackContainer/>
      </Provider>
    )
  }
}

export default App


























