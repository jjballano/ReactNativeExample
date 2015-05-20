'use strict';

var React = require('react-native');
var SearchPage = require('./searchPage');

var {
  AppRegistry, Text, StyleSheet, NavigatorIOS
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

var ReactNativeExampleApp = React.createClass({
  render: function(){
    return (
        <NavigatorIOS style={styles.container} initialRoute={{
          title: 'Property finder',
          component: SearchPage,
        }}/>
    )
  }
});

AppRegistry.registerComponent('ReactNativeExample', () => ReactNativeExampleApp );