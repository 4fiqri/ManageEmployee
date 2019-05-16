import React, { Component } from 'react';
import {View, ActivityIndicator} from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label, Body, Title, Button, Text, Icon as Ico } from 'native-base';
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import {Fire} from '../support/firebase'
import { StackActions, NavigationActions } from 'react-navigation'
import {onLoginSuccess} from '../2.actions'

class Login extends Component {
  state={loading : true, error:''}

  componentDidUpdate(){
    if(this.props.bebas){
      const stackReset = StackActions.reset({
        index : 0,
        actions : [NavigationActions.navigate({routeName : 'home'})]
      })
      this.props.navigation.dispatch(stackReset)
      this.setState({loading : false})
    }
  }

  componentDidMount(){
    Fire.auth().onAuthStateChanged((user) => {
      if(user){
       this.props.onLoginSuccess(user.email,user.uid)
      }else{
        this.setState({loading:false})
      }
    })
  }

  onBtnLogin=()=>{
    this.setState({loading:true})
    var email =this.inputEmail
    var password = this.inputPassword
    if(email && password){
      Fire.auth().signInWithEmailAndPassword(email, password)
      .then((val)=>{
        
        this.props.onLoginSuccess(val.user.email, val.user.uid)
        this.setState({loading:false})
      })
      .catch((err)=>{
        this.setState({loading:false, error:err.message})
      })
  
    }else{
      this.setState({error : 'Isi semua', loading:false})
    }
  }

  render() {
    console.disableYellowBox=true
    if(this.state.loading){
      return(
        <View style={{flex:1, justifyContent:'center', alignContent:'center'}}>
          <ActivityIndicator size='large' color='black'/>
        </View>
      )
    }
    return (
      <Container>
        <Header>
            <Body>
              <Title style={{marginLeft:15}}>Login</Title>
            </Body>
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input onChangeText={(val) => {this.inputEmail=val}} />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input onChangeText={(val) => {this.inputPassword=val}} />
            </Item>
          </Form>
          <Button onPress={this.onBtnLogin} style={{marginTop :20, marginHorizontal:15}} block>
            <Text>LOGIN</Text>
          </Button>
          <View style={{flexDirection : 'row', justifyContent:"center", marginTop: 15}}>
            <View style={{height :60, width : 60}}>
              <Icon name='google' size={40}></Icon>
            </View>
            <View style={{height :60, width : 60}}>
              <Icon name='facebook' size={40}></Icon>            
            </View>
            <View style={{height :60, width : 60}}>
              <Icon name='twitter' size={40}></Icon>            
            </View>
          </View>
          <View style={{flexDirection:'row', justifyContent:"center", marginTop:30}}>
            <Text onPress={() => this.props.navigation.navigate('register')}>Belum punya akun? Register!</Text>
          </View>
          {/* <View>
            <Text>{this.props.bebas}</Text>
          </View> */}
          {this.state.error
          ?
          <View style={{paddingVertical:15, backgroundColor:'red', marginHorizontal:15}} >
              <View style={{position:'absolute', top:3, right:3}}>
                  <Ico  name='close-circle' fontsize={10} color='white' onPress={() => this.setState({error:''})}/>
              </View>
              <Text style={{color:'white', alignSelf:'center'}}>{this.state.error}</Text>
          </View>
          :
          null
          }
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    bebas : state.auth.email
  }
}

export default connect(mapStateToProps,{onLoginSuccess})(Login)