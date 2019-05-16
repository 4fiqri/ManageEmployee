import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Body, Title, Input, Label, Picker, Left, Right, View,Button,Text } from 'native-base';
import {Fire} from '../support/firebase'
import {connect} from 'react-redux'

class EditEmployee extends Component {
    state={ data :[], idEdit:null, selected:''}

  componentDidMount(){
    const db= Fire.database()
    const list =db.ref(`manager/users${this.props.id}/employee`)
    list.on('value', (items) => {
      console.log(items.val())
      this.setState({data:items.val()})
    }, (err) => {
      console.log(err)
    })
  }

  onBtnSave = () => {
    var ngaran = this.nama ? this.nama :  this.state.data[this.state.idEdit].nama
    var phone = this.phone ? this.phone : this.state.data[this.state.idEdit].phone
    var shift = this.state.selected ? this.state.selected : this.state.data[this.state.idEdit].shift
    
    Fire.database().ref(`manager/users${this.props.id}/employee/${this.state.idEdit}`).set({
      nama : ngaran, phone: phone, shift:shift
    })
    .then((res) => {
      this.setState({idEdit:null, selected:''})
      alert('Edit Berhasil')
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render() {
    console.disableYellowBox=true
    return (
      <Container>
         <Header>
            <Body>
              <Title style={{marginLeft:15}}>Edit Data Employee</Title>
            </Body>
        </Header>
        <Content>
            <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                <View>
                    <Text>Select Data</Text>
                </View>
                <View>
                    <Picker style={{width:200}} mode = "dropdown" selectedValue={this.state.idEdit} onValueChange={(val) => this.setState({idEdit:val})}>
                        <Picker.Item label='select Name' value={null} />
                    { Object.keys(this.state.data).map(val =>{
                        return(
                            <Picker.Item label={this.state.data[val].nama} value={val} />
                        )
                    })
                    
                    }
                    </Picker>
                </View>
            </View>
          <Form>
            <Item stackedLabel>
              <Label>Nama</Label>
              <Input onChangeText={(val) => {this.nama=val}} defaultValue={this.state.idEdit ? this.state.data[this.state.idEdit].nama : null} />
            </Item>
            <Item stackedLabel>
              <Label>Phone</Label>
              <Input onChangeText={(val) => {this.phone=val}} defaultValue={this.state.idEdit ? this.state.data[this.state.idEdit].phone : null} />
            </Item>
            <Item>
                <Left>
                    <Label>Select Shift</Label>
                </Left>
                <Right>
                    <Picker
                        style={{width:120}}
                        mode='dropdown'
                        selectedValue={(this.state.idEdit && this.state.selected=='') ? this.state.data[this.state.idEdit].shift : (this.state.idEdit && this.state.selected) ? this.state.selected : null}
                        onValueChange={(value) => this.setState({selected:value})}
                        >
                        <Picker.Item label='I' value='I'/>
                        <Picker.Item label='II' value='II'/>
                        <Picker.Item label='III' value='III'/>
                    </Picker>
                </Right>
            </Item>
            <Button onPress={this.onBtnSave} style={{marginTop :20, marginHorizontal:15}} block>
                <Text>Save</Text>
            </Button>
          </Form>
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

export default connect(mapSTateToProps)(EditEmployee)