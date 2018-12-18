import React, { Component } from "react";
import {View, StyleSheet, Text, SectionList} from 'react-native'

export default class SectionListScreen extends Component {
    static navigationOptions={
        title:'SectionListScreen'
    }

    render(){
        return (<View style={styles.container}>
            <SectionList
            sections={[
                {title: 'D', data:['Devin']},
                {title: 'J', data:['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
            ]}
            renderItem={({item})=>{
                return <Text style={styles.item}>{item}</Text>}
            }
            renderSectionHeader={({section})=><Text style={styles.sectionHeader}>{section.title}</Text>}
            keyExtractor={(item, index)=>index}
            />
        </View>)
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:22
    },
    sectionHeader:{
        paddingTop:2,
        paddingLeft: 10,
        paddingBottom: 2,
        paddingRight: 10,
        fontSize: 14,
        fontWeight:'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item:{
        padding:0,
        fontSize:18,
        height:44,
    }
})