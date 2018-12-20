import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View } from 'react-native';

export const netOperator = {
    postEndPoint: () => {
        fetch("https://mywebsite.com/endpoint/", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                firstParam: "yourValue",
                secondParam: "yourOtherValue"
            })
        })
    },
    postFormEndPoint: () => {
        fetch("https://mywebsite.com/endpoint/", {
            method: 'POST',
            headers: {
                "Content-Type": 'application/x-www-form-urlencoded'
            },
            body: "key1=value1&key2=value2"
        })
    },
    getMoviesByPromise: () => {
        return fetch("https://facebook.github.io/react-native/movies.json")
            .then(response => response.json())
            .then(responseJson => {
                return responseJson.movies;
            })
            .catch(err => {
                console.error(err)
            });
    },
    getMoviesAsync: async function getMoviesFromApi() {
        try {
            let response = await fetch("https://facebook.github.io/react-native/movies.json")
            let responseJson = await response.json()
            return responseJson.movies
        } catch (err) {
            console.console.error(err);
        }
    },
    createRequestAndExecuteIt: () => {
        let request = new XMLHttpRequest();
        request.onreadystatechange = e => {
            if (request.readyState !== 4) {
                return
            }
            if (request.status == 200) {
                console.log('success', request.responseText)
            } else {
                console.warn("error")
            }
        }
        request.open('GET', "https://mywebsite.com/endpoint/")
        request.send()
    },
    connectSocket: () => {
        let ws = new WebSocket("ws://host.com/path")
        ws.onopen = () => {
            ws.send("something")
        }
        ws.onmessage = (e) => {
            console.log(e.data)
        }
        ws.onerror = e => {
            console.log(e.message);
        }
        ws.onclose = e => {
            console.log(e.code, e.reason)
        }
    },
    offer: (url, callback) => {
        if (!url) {
            return
        }
        fetch(url)
            .then((response) => response.json())
            .then(callback)
    },
}

export default class FetchExample extends Component {
    static navigationOptions = {
        title: 'FetchMovies'
    }

    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
        }
    }

    componentDidMount() {
        return netOperator.getMoviesAsync()
            .then(movies => {
                this.setState({
                    isLoading: false,
                    dataSource: movies,
                }, () => {

                })
            })
            .catch((error) => {
                console.error(error)
            })
    }

    render() {
        if (this.state.isLoading) {
            return (<View style={{ flex: 1, padding: 20 }}>
                <ActivityIndicator />
            </View>)
        }
        return (
            <View style={{ flex: 1, padding: 20 }}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({ item }) => <Text>{item.title}, {item.releaseYear}</Text>}
                    keyExtractor={(item, index) => item.id}
                />
            </View>
        )
    }
}