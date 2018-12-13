import React, {Component} from 'react'
import {
    View,
    Text,
    Button,
    TouchableHighlight,
    TouchableOpacity,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
    StyleSheet,
    ScrollView,
    Alert,
    Platform
} from 'react-native'

export default class TouchExample extends Component {
    static navigationOptions = {
        title: 'Touch Screen'
    }

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (<ScrollView>
            <View style={this.styles.buttonContainer}>
                <Button title="Press Me" onPress={this._tapButton}/>
            </View>
            <View style={this.styles.buttonContainer}>
                <Button color="#841484" title="Press Me" onPress={this._tapButton}/>
            </View>
            <View style={this.styles.alternativeLayoutButtonContainer}>
                <Button title="This looks great!" onPress={this._tapButton}/>
                <Button title="OK!" color="#841584" onPress={this._tapButton}/>
            </View>
            <TouchableHighlight style={this.styles.buttonContainer} onPress={this._onPress} underlayColor="white">
                <View style={this.styles.button}>
                    <Text style={this.styles.buttonText}>TouchableHighlight</Text>
                </View>
            </TouchableHighlight>
            <TouchableOpacity style={this.styles.buttonContainer} onPress={this._onPress}>
                <View style={this.styles.button}>
                    <Text style={this.styles.buttonText}>TouchableOpacity</Text>
                </View>
            </TouchableOpacity>
            <TouchableNativeFeedback style={this.styles.buttonContainerNative} onPress={this._onPress}
                                     background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
                <View style={this.styles.button}>
                    <Text style={this.styles.buttonText}>TouchableNativeFeedback</Text>
                </View>
            </TouchableNativeFeedback>
            <TouchableWithoutFeedback style={this.styles.buttonContainerNative} onPress={this._onPress}>
                <View style={this.styles.button}>
                    <Text style={this.styles.buttonText}>TouchableWithoutFeedback</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableHighlight style={this.styles.buttonContainer} onPress={this._onPress}
                                      onLongPress={this._longPress}
                                      underlayColor="white">
                <View style={this.styles.button}>
                    <Text style={this.styles.buttonText}>Touchable With Long Press</Text>
                </View>
            </TouchableHighlight>
        </ScrollView>);
    }

    _tapButton() {
        Alert.alert("you tapped the button!")
    }

    _onPress() {
        Alert.alert("you press on the button!")
    }

    _longPress() {
        Alert.alert("long pressed here!")
    }

    const
    styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
        },
        buttonContainer: {
            margin: 20,
            justifyContent: 'center'
        },
        buttonContainerNative: {
            margin: 20,
            justifyContent: 'center',
        },
        button: {
            marginBottom: 30,
            width: 260,
            alignItems: 'center',
            backgroundColor: '#2196f3'
        },
        alternativeLayoutButtonContainer: {
            margin: 20,
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        buttonText: {
            padding: 20,
            color: 'white'
        },

    })
};