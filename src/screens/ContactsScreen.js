/**
 * ImApp
 * https://github.com/facebook/react-native
 * @flow
 * 通讯录页面
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

export default class ContactsScreen extends Component {
  static navigationOptions = {
    tabBarLabel: '通讯录',
    tabBarIcon: ({focused, tintColor}) => {
      if (focused) {
        return (
          <Image style={styles.tabBarIcon} source={require('../../images/ic_contacts_selected.png')}/>
        );
      }
      return (
        <Image style={styles.tabBarIcon} source={require('../../images/ic_contacts_normal.png')}/>
      );
    },
  };

  render() {
    return(
    	<View style={styles.container}>
	        <View style={styles.content}>
	          <Text style={{fontSize: 16, color: '#000000'}}>通讯录列表</Text>
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
  content: {
    flex: 1,
    width: width,
    flexDirection: 'row',
    backgroundColor: Global.pageBackgroundColor
  },
  tabBarIcon: {
    width: 24,
    height: 24,
  },
});
