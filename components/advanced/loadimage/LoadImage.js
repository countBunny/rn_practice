import { Image, ScrollView, ImageBackground ,Text} from 'react-native';
import React, { Component } from 'react';

export default class LoadImageScreen extends Component {
    static navigationOptions = {
        title: 'LoadImage Screen'
    }
    render() {
        return (<ScrollView><Image
            source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
            style={{ width: 200, height: 200 }}
        />
            <Image
                source={{
                    uri: 'https://facebook.github.io/react/logo-og.png',
                    method: 'POST',
                    headers: {
                        Pragma: 'no-cache',
                    },
                    body: 'Your Body goes here',
                }}
                style={{ width: 200, height: 200 }}
            />
            <Image
                style={{
                    width: 51,
                    height: 51,
                    resizeMode: 'contain',
                }}
                source={{
                    uri:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
                }}
            />
            <ImageBackground source={{ uri: 'http://es6.ruanyifeng.com/images/cover-3rd.jpg' }}
                style={{ width: 200, height: 200 , justifyContent:"center", alignItems:"center",}}
            >
                <Text>Inside</Text>
            </ImageBackground>
        </ScrollView>)
    }
}