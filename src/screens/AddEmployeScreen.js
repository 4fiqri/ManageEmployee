import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Picker, Left, Right, View,Button,Text,Body, Title } from 'native-base';
import { connect } from 'react-redux'
import {Fire} from '../support/firebase'


class AddEmployee extends Component {
    state={selected:'I'}

  onBtnAddClick = () => {
    var nama = this.inputNama
    var phone = this.inputPhone
    var shift = this.state.selected
    var id = this.props.id
    {nama && phone 
    ?
    Fire.database().ref('manager/users' + id + '/employee').push({
      nama, phone, shift
    })
    .then((val) => {
      alert('Data Masuk')
    })
    .catch((err) => console.log(err))
    : alert('Harus diisi Semua')
    }
  }

  render() {
    console.disableYellowBox=true
    return (
      <Container>
        <Header>
            <Body>
              <Title style={{marginLeft:15}}>Add Employee</Title>
            </Body>
        </Header>

        <Content>
            <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                <View style={{paddingTop:15, paddingLeft:15}}>
                    <Text>Select Data</Text>
                </View>
                {/* <View>
                    <Picker style={{width:200}} mode = "dropdown" selected={this.state.selected} >

                        <Picker.Item label='I' value='I'/>
                        <Picker.Item label='II' value='II'/>
                        <Picker.Item label='III' value='III'/>
                    </Picker>
                </View> */}
            </View>
          <Form>
            <Item floatingLabel>
              <Label>Nama</Label>
              <Input onChangeText={(text) => this.inputNama=text} />
            </Item>
            <Item floatingLabel last>
              <Label>Phone</Label>
              <Input onChangeText={(text) => this.inputPhone=text} />
            </Item>
            <Item>
                <Left>
                    <Label>Select Shift</Label>
                </Left>
                <Right>
                    <Picker
                        style={{width:120}}
                        mode='dropdown'
                        selectedValue={this.state.selected}
                        onValueChange={(value) => this.setState({selected:value})}
                        >
                        <Picker.Item label='I' value='I'/>
                        <Picker.Item label='II' value='II'/>
                        <Picker.Item label='III' value='III'/>
                    </Picker>
                </Right>
            </Item>
            <Button onPress={this.onBtnAddClick} style={{marginTop :20, marginHorizontal:15}} block>
                <Text>Add</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  var {id} = state.auth
  return{
    id
  }
}

export default connect (mapStateToProps)(AddEmployee)
