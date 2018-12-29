import React from 'react';
import {
    NativeModules,
    LayoutAnimation,
    Text,
    TouchableOpacity,
    StyleSheet,
    View,
} from 'react-native';

const { UIManager } = NativeModules

UIManager.setLayoutAnimationEnableExperimental &&
    UIManager.setLayoutAnimationEnableExperimental(true)

export default class LayoutAnimationEx extends React.Component {
    state = {
        w: 100,
        h: 100,
    }

    static navigationOptions ={
        title: "Layout Animation Example"
    }

    _onPress = () => {
        //animate the update
        LayoutAnimation.spring();
        this.setState({
            w: this.state.w + 15,
            h: this.state.h + 15,
        })
    }
    /**
     * 在丢帧时，可以通过该方法来优化
     */
    shouldComponentUpdate(){
        return true
    }

    render() {
        return (<View style={styles.container}>
            <View style={[styles.box, { width: this.state.w, height: this.state.h }]}>
                <TouchableOpacity onPress={this._onPress}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Press me!</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>)
        }
    }
    
const styles = StyleSheet.create({
                container: {
                flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        },
    box:{
                width: 200,
            height: 200,
            backgroundColor: 'red',
        },
    button:{
                backgroundColor: 'black',
            paddingHorizontal: 20,
            paddingVertical: 15,
            marginTop: 15,
        },
    buttonText: {
                color: '#fff',
            fontWeight: 'bold',
        }
})