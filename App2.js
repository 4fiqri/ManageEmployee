import React from 'react'
import { View, Text, ScrollView, TextInput, TouchableHighlight, StyleSheet, Alert } from 'react-native'
import { fire } from './src/support/firebase'
import Header from './src/component/header'
import Modal from './modal'

class Todo extends React.Component {
    state = {data : [], textInput : '', modalVisible:false, editData :'', keyEdit : '0'}
    componentDidMount(){
        var db = fire.database()
        var todo = db.ref('todo')
        todo.on('value', (items) => {
            this.setState({data : items.val()})
        }, (err) => {
            console.log(err)
        })
    }

    onBtnAddClick = () => {
        var db = fire.database()
        var todo = db.ref('todo')
        
        todo.push({
            todo : this.state.textInput
        })
        .then((res) => {
            console.log(res)
            this.setState({textInput : ''})
        })
        .catch((err) => console.log(err))
    }

    onBtnDeleteClick = (id) => {
        Alert.alert('Delete Data', `Are You Sure delete ${this.state.data[id].todo} ?`,
        [
            {text : 'Yes', onPress : () => fire.database().ref('todo').child(id).remove()},
            {text : 'Cancel'}
        ])
    }

    renderDataJsx = () => {
        var jsx = Object.keys(this.state.data).map((val) => {
            return(
                <View style={styles.contentContainer}>
                    <Text style={{color : 'white', flex : 1}}>{this.state.data[val].todo}</Text>
                    <TouchableHighlight onPress={() => this.setState({modalVisible:true, editData:this.state.data[val].todo,keyEdit:val})} style={styles.buttonContent}>
                        <Text style={{color : 'white'}}>Edit</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.buttonContent} onPress={() => this.onBtnDeleteClick(val)}>
                        <Text style={{color : 'white'}}>Delete</Text>
                    </TouchableHighlight>
                </View>
            )
        })
        return jsx
    }
    render(){
        console.disableYellowBox = true
        return(
            <View style={styles.container}>
                <Header/>
                <ScrollView style={styles.ScrollViewContainer}>
                    {this.renderDataJsx()}
                </ScrollView>
                <View style={styles.footerContainer}>
                    <TextInput placeholder='Add Todo' style={styles.textInput} onChangeText={(text) => this.setState({textInput : text})} value={this.state.textInput}/>
                    <TouchableHighlight style={styles.button} onPress={this.onBtnAddClick}>
                        <Text style={styles.buttonText}> + </Text>
                    </TouchableHighlight>
                </View>
                <Modal modalVisible={this.state.modalVisible} content={this.state.editData} keyEdit={this.state.keyEdit} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    ScrollViewContainer : {
        flex : 1
    },
    footerContainer : {
        backgroundColor : 'pink',
        flexDirection : 'row',
        padding : 20
    },
    textInput : {
        flex : 1,
        backgroundColor : 'white',
        paddingHorizontal : 10
    },
    button : {
        width : 40,
        height : 40,
        justifyContent: 'center',
        alignSelf : 'center',
        marginLeft : 5,
        borderRadius : 40,
        backgroundColor : 'red'
    },
    buttonText : {
        color : 'white',
        alignSelf : 'center'
    },
    contentContainer : {
        flexDirection : 'row',
        backgroundColor : 'purple',
        padding : 20
    },
    buttonContent : {
        backgroundColor : 'pink',
        height : 30,
        marginHorizontal : 5,
        paddingHorizontal : 5
    }

})

export default Todo