import React, {Component} from 'react'
import {View,Text, FlatList, StyleSheet} from 'react-native'

export default class FlatListScreen extends Component {

    static navigationOptions={
        title:'FlatListScreen',
    }

    render(){
        return (<View style={styles.container}>
        <FlatList
        data={
            [
                {key: 'Devin'},
                {key: 'Jackson'},
                {key: 'James'},
                {key: 'Joel'},
                {key: 'John'},
                {key: 'Jillian'},
                {key: 'Jimmy'},
                {key: 'Julie'},
            ]
        }
        renderItem={({item})=>{
            return <Text style={styles.list_item}>{item.key}</Text>
        }}
        />
        </View>)
    }

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 22,
    },
    list_item:{
        padding:10,
        fontSize: 18,
        height:44,
    }
})