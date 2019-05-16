import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert,TextInput, Button} from 'react-native';
import { fire } from './src/support/firebase'

export default class ModalExample extends Component {
    state = {modalVisible:false}
    
    componentWillReceiveProps(props){
        if(props.modalVisible){
            this.setState({modalVisible: props.modalVisible})
        }
    }

    onSaveBtn = () => {
        fire.database().ref('todo/'+this.props.keyEdit).set({
            todo : this.inputValue
        })
        .then((res) =>{
            alert('Data Berhasil di Edit')
            this.setState({modalVisible:false})
        })
        .catch((err) => console.log(err))
    }

  render() {
    return (
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text>{this.props.content}</Text>
                <TextInput placeholder={'Edit Todo'} onChangeText={(value) => this.inputValue=value}/>
                <Button title='Save' onPress={this.onSaveBtn} />
              <TouchableHighlight
                onPress={() => {
                  this.setState({modalVisible:false});
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        // <TouchableHighlight
        //   onPress={() => {
        //     this.setModalVisible(true);
        //   }}>
        //   <Text>Show Modal</Text>
        // </TouchableHighlight>
    );
  }
}