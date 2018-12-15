import React, {Component} from 'react'
import {View,Text, FlatList, StyleSheet} from 'react-native'

export default class FlatListScreen extends Component {

    render(){
        return (<FlatList
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
        renderItem={(item)=>{
            <Text></Text>
        }}
        />)
    }

}

const styles = StyleSheet.create({
    container:{

    },
    list_item:{

    }
})