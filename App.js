import React from 'react';
import Navigator from './app/src/screen/splashscreen';
import {AppRegistry ,YellowBox, View} from 'react-native';
export default class App extends React.Component {
    render() {
        return <Navigator />;
    }
}

AppRegistry.registerComponent('DemoProject', () => App);
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

