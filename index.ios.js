/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';

import Login from './components/loginView'
import Tabs from './components/tabs'
import Details from './components/comicDetailView'

var NavigatorBarRouterMapper = {
  LeftButton: function(route, navigator, index) {
    if(route.name == 'Login' || route.name == 'Dashboard'){
      return null
    }
    return(
      <TouchableHighlight
        onPress={() => {
          if(index > 0){
            navigator.pop();
          }
        }}>
        <Text style={{marginTop: 10, marginLeft: 20, color: "#007AFF"}}>上一页</Text>
      </TouchableHighlight>
    )
  },
  RightButton: function(route, navigator, index){
    return null;
  },
  Title: function(route, navigator, index){
    if(route.name == 'Login' || route.name == 'Dashboard'){
      return null
    }
    return(
      <Text style={{marginTop: 10, color: "#007AFF"}}>{route.name}</Text>
    )
  }
}


class ychowProject extends Component {

  renderScene(route, navigator){
    switch(route.name){
      case 'Login':
        return(
          <Login navigator={navigator} route={route}></Login>
        );
      case 'Dashboard':
        return(
          <Tabs navigator={navigator} route={route}></Tabs>
        );
      case '详情':
        return(
          <Details navigator={navigator} route={route} />
        )
    }
  }

  render() {
    return (
      <Navigator style={{backgroundColor: "#fff"}}
        initialRoute={{name: "Login"}}
        renderScene={this.renderScene}
        configureScene={(route) => {
          if(route.sceneConfig){
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromRight
        }}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={NavigatorBarRouterMapper} />
        } />
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('ychowProject', () => ychowProject);
