/**
 * ImApp
 * https://github.com/facebook/react-native
 * @flow
 * 我的页面
 */
import React, {Component} from 'react';
import Global from '../utils/Global';
import TitleBar from '../components/TitleBar';
import ListItem from '../components/ListItem';
import Utils from '../utils/Utils';
import StorageUtil from '../utils/StorageUtil';

import {
  Dimensions,
  StyleSheet,
  PixelRatio,
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight,
  Alert,
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

  constructor(props) {
    super(props);
    this.state = {
      userInfo:{
        avatar:require('../../images/avatar.png'),
        nick:'Ycc'
      },
      username: 'Ycc',
      loadingState: Global.loadSuccess,
    };
    // this.loadUserInfo();
  }

  //加载用户信息，并判断加载是否成功
  loadUserInfo() {
    StorageUtil.get('username', (error, object) => {
      if (!error && object != null) {
        let username = object.username;
        this.setState({username: username});
        let userInfoKey = 'userInfo-' + username;
        StorageUtil.get(userInfoKey, (error, object) => {
          if (!error && object != null) {
            this.setState({userInfo: object.info});
            this.setState({loadingState: Global.loadSuccess});
          } else {
            this.setState({loadingState: Global.loadError});
          }
        })
      } else {
        this.setState({loadingState: Global.loadError});
      }
    });
  }

  // componentWillMount() {
  //   CountEmitter.addListener('updateAvatar', () => {
  //     // 刷新头像
  //     this.loadUserInfo();
  //   });
  //   CountEmitter.addListener('updateUserInfo', () => {
  //     // 刷新用户数据
  //     this.loadUserInfo();
  //   });
  // }

  // componentWillUnmount() {
  //   CountEmitter.removeListener('updateAvatar', ()=>{});
  //   CountEmitter.removeListener('updateUserInfo', ()=>{});
  // }

  //跳转至某个页面
  turnOnPage(pageName, params) {
    if (Utils.isEmpty(params)) {
      this.props.navigation.navigate(pageName);
    } else {
      this.props.navigation.navigate(pageName, params);
    }
  }

  render() {
    switch (this.state.loadingState) {
      case Global.loading:
        return this.renderLoadingView();
      case Global.loadSuccess:
        return this.renderDetailView();
      case Global.loadError:
        return this.renderErrorView();
    }
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <TitleBar nav={this.props.navigation}/>
        <View style={styles.content}>
          <CommonLoadingView hintText={"正在获取联系人数据..."}/>
        </View>
      </View>
    );
  }

  renderErrorView() {
    return (
      <View style={styles.container}>
        <TitleBar nav={this.props.navigation}/>
        <TouchableOpacity style={styles.content} activeOpacity={0.6} onPress={() => this.loadUserInfo()}>
          <View style={[styles.content, {justifyContent: 'center', alignItems: 'center'}]}>
            <Text style={{fontSize: 17, color: '#999999'}}>加载用户数据失败</Text>
            <Text style={{fontSize: 17, color: '#999999', marginTop: 5}}>点击屏幕重试</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  renderDetailView() {
    let avatar = require('../../images/avatar.png');
    // if (!Utils.isEmpty(this.state.userInfo) && !Utils.isEmpty(this.state.userInfo.avatar)) {
    //   avatar = {uri: this.state.userInfo.avatar};
    // }
    return(
      <View style={styles.container}>
        <TitleBar nav={this.props.navigation}/>
        <View style={styles.divider}></View>
        <ScrollView style={styles.content}>
          <View style={{width: width, height: 20}}/>
          <TouchableHighlight underlayColor={Global.touchableHighlightColor} onPress={() => {
            // this.turnOnPage('PersonInfo', {userInfo: this.state.userInfo})
            Alert.alert("个人信息页");
          }}>
            <View style={styles.meInfoContainer}>
              <Image style={styles.meInfoAvatar} source={avatar}/>
              <View style={styles.meInfoTextContainer}>
                <Text style={styles.meInfoNickName}>{this.state.username}</Text>
                <Text style={styles.meInfoWeChatId}>{"昵称：" + this.state.userInfo.nick}</Text>
              </View>
              <Image style={styles.meInfoQRCode} source={require('../../images/ic_qr_code.png')}/>
            </View>
          </TouchableHighlight>
          <View/>
          <View style={{width: width, height: 20}}/>
          <ListItem icon={require('../../images/ic_settings.png')} text={"设置"} handleClick={() => {
            // this.turnOnPage('Settings')
            Alert.alert("设置页");
          }}/>
          <View style={{width: width, height: 20}}/>
        </ScrollView>
        <View style={styles.divider}></View>
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
