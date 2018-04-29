/**
 * ImApp
 * https://github.com/facebook/react-native
 * @flow
 * Android入口文件
 */

import React, { Component } from 'react';
import {StackNavigator,TabNavigator } from 'react-navigation';
import ContactsScreen from './src/screens/ContactsScreen';
import MeScreen from './src/screens/MeScreen';
import Global from './src/utils/Global';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';

const {width} = Dimensions.get('window');

export default class HomeScreen extends Component {
  static navigationOptions = {
    tabBarLabel: '微信',
    tabBarIcon: ({ focused }) =>{
      if (focused) {
        return (
            <Image style={styles.tabBarIcon} source={require('./images/ic_weixin_selected.png')}/>
        );
      }
      return (
        <Image style={styles.tabBarIcon} source={require('./images/ic_weixin_normal.png')}/>
      );
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={{fontSize: 16, color: '#000000'}}>聊天界面</Text>
        </View>
      </View>
    );
  }
}

const tabNavigatorScreen = TabNavigator({
  Home: {screen: HomeScreen},
  Contacts: {screen: ContactsScreen},
  Me: {screen: MeScreen}
}, {
  tabBarOptions: {
    activeTintColor: '#45C018',
    inactiveTintColor: '#999999',
    showIcon: true,
    labelStyle: {
      fontSize: 12,
      marginTop: 0,
      marginBottom: 0,
    },
    style: {
      marginBottom: -2,
      backgroundColor: '#FCFCFC',
    },
    tabStyle: {}
  },
  tabBarPosition: 'bottom',
});

const IMApp = StackNavigator({
  Home: {screen: tabNavigatorScreen},
}, {
  headerMode: 'none', // 此参数设置不渲染顶部的导航条
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    width: width,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Global.pageBackgroundColor
  },
  tabBarIcon: {
    width: 24,
    height: 24,
  }
});

AppRegistry.registerComponent('IMApp', () => IMApp);
