
'use strict'

import React,{
	Component,
	Text,
	View,
	StyleSheet
} from 'react-native';


class heroView extends Component{
	render() {
		return(
			<View style={styles.container}>
				<Text style={styles.title}>heroView</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
	    flex: 1,
	    alignItems: 'center'
	},
	title: {
		marginTop: 100,
		fontSize: 25
	}
})

module.exports = heroView;