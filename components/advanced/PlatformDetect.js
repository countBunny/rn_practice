import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    height: Platform.OS === 'ios' ? 200 : 100,
    container: {
        flex: 1,
        ...Platform.select({
            ios: {
                backgroundColor: 'red'
            },
            android: {
                backgroundColor: 'blue'
            },
        }),
    },
})

const Component = Platform.select({
    ios: () => require("ComponentIOS"),
    android: () => require("ComponentAndroid")
})();

if (Platform.Version === 25) {
    console.log("Running on Nougat!")
}
//ios 获取当前系统版本的字符串 “10.3”
const majorVersionIOS = parseInt(Platform.Version, 10)
if(majorVersionIOS <=9){
    console.log("Work around a change in behavior")
}

const BigButton = require('./BigButton')