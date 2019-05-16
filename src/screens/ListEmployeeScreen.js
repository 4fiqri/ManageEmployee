import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text , Left, Right, Title, Body} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Fire } from '../support/firebase'
import {connect} from 'react-redux'

class ListEmployee extends Component {
    state={ data :[] }

    componentDidMount(){
      const db= Fire.database()
      const list =db.ref(`manager/users${this.props.user.id}/employee`)
      list.on('value', (items) => {
        console.log(items.val())
        this.setState({data:items.val()})
      }, (err) => {
        console.log(err)
      })
    }

  render() {
    console.disableYellowBox = true
    return (
      <Container>
        <Header>
            <Body>
              <Title>List Employee</Title>
            </Body>
        </Header>
        <Content>
          <List>
            { this.state.data ? Object.keys(this.state.data).map(val =>{
                return(
                    <ListItem onPress={() => this.props.navigation.navigate('detail',{
                      idUser : val,
                      nama : this.state.data[val].nama,
                      shift : this.state.data[val].shift,
                      phone : this.state.data[val].phone
                    })} >
                        <Left>
                            <Text>{this.state.data[val].nama}</Text>
                        </Left>
                        <Right>
                            <Icon name='chevron-right' size={24} ></Icon>
                        </Right>
                    </ListItem>
                )
            })
            : null
            }
          </List>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    user : state.auth
  }
}

export default connect(mapStateToProps)(ListEmployee)