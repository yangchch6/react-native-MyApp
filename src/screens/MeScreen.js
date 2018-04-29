/**
 * ImApp
 * https://github.com/facebook/react-native
 * @flow
 * 我的页面
 */
import React, {Component} from 'react';
import Global from '../utils/Global';

import {
  Dimensions,
  StyleSheet,
  PixelRatio,
  Text,
  View,
  Image
} from 'react-native';

const {width} = Dimensions.get('window');

export default class MeScreen extends Component {
  static navigationOptions = {
    tabBarLabel: '我',
    tabBarIcon: ({focused, tintColor}) => {
      if (focused) {
        return (
          <Image style={styles.tabBarIcon} source={require('../../images/ic_me_selected.png')}/>
        );
      }
      return (
        <Image style={styles.tabBarIcon} source={require('../../images/ic_me_normal.png')}/>
      );
    },
  };

  render() {
    return(
      <View style={styles.container}>
          <View style={styles.content}>
            <Text style={{fontSize: 16, color: '#000000'}}>我的界面</Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  divider: {
    width: width,
    height: 1 / PixelRatio.get(),
    backgroundColor: '#D3D3D3'
  },
  content: {
    flex: 1,
    width: width,
    flexDirection: 'column',
    backgroundColor: Global.pageBackgroundColor,
  },
  tabBarIcon: {
    width: 24,
    height: 24,
  },
  meInfoContainer: {
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#FFFFFF',
    paddingTop: 10,
    paddingBottom: 10,
  },
  meInfoAvatar: {
    width: 60,
    height: 60,
  },
  meInfoTextContainer: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  meInfoNickName: {
    color: '#000000',
    fontSize: 16,
  },
  meInfoWeChatId: {
    color: '#999999',
    fontSize: 14,
    marginTop: 5,
  },
  meInfoQRCode: {
    width: 25,
    height: 25,
  }
});
