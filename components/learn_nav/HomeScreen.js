import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import Greeting from "../learn_props/GreetingComponent";

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: "Welcome",
    };
    render() {
        var movie = MOCKED_MOVIE_DATAS[0];
        return (
            <View style={styles.container}>
                <Text>{movie.title}</Text>
                <Text>{movie.year}</Text>
                <Image source={{ uri: movie.posters.thumbnail }} style={styles.thumbnail} />
                <View style={{ alignItems: 'center' }}>
                    <Greeting name='Rexxar' />
                    <Greeting name='Jaina' />
                    <Greeting name='Valeera' />
                </View>
                <Button
                    title="Go to Jane's profile"
                    onPress={
                        () => {
                            this.props.navigation.navigate('Profile', {
                                name: 'Jane',
                            })
                        }
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    thumbnail: {
        width: 53,
        height: 81
    },
});

var MOCKED_MOVIE_DATAS = [
    {
        title: "标题",
        year: 2015,
        posters: {
            thumbnail: "http://i.imgur.com/UePbdph.jpg"
        }
    }
];