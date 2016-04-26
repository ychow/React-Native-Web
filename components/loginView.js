
'use strict'

import React,{
	Component,
	Text,
	View,
	TouchableHighlight,
	AlertIOS,
	StyleSheet,
	Image,
	Navigator
} from 'react-native';


class loginView extends Component{

	render() {
		return(
			<Image source={{uri: 'https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362'}} style={styles.container}>
				<View>
					<Text style={styles.title}>超级英雄</Text>
					<TouchableHighlight
					  onPress={(this.onLogin.bind(this))}
					  style={styles.button}>
					  <Text style={styles.buttonText}>Login</Text>
					</TouchableHighlight>
				</View>
			</Image>
		)
	}

	onLogin(){
		AlertIOS.alert(
			"提示",
			"登录成功",
			[
				{
					text: '确定',
					onPress: (this.accept.bind(this))
				},
				{
					text: '取消',
					onPress: (this.cancel.bind(this))
				}
			]
		)
	}

	accept() {
		this.props.navigator.push({
			title: 'Dashboard',
			name: 'Dashboard',
			passProps: {}
		});
	}

	cancel() {
		console.log('no')
	}

}

const styles = StyleSheet.create({
	container: {
	    flex: 1,
	    alignItems: 'stretch',
	    padding: 30
	},
	button: {
		flex: 1,
		width: 300,
		height: 30,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'red',
		borderRadius: 8,
		marginTop: 60,
		marginBottom: 10
	},
	buttonText: {
		color: '#ffffff'
	},
	title: {
		marginTop: 100,
		fontSize: 25,
		textAlign: 'center',
		backgroundColor: 'rgba(0,0,0,0)'
	}
})

module.exports = loginView;