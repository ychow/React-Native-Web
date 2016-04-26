'use strict'

import React,{
	Component,
	StyleSheet,
	View,
	Image,
	Text
} from 'react-native';

class comicDetailView extends Component{
	constructor(props){
		super(props);

		this.passProps = this.props.route.passProps
	}

	render(){
		return(
			<View style={styles.container}>
				<Image source={{uri: this.passProps.comic.thumbnail.path+'.jpg'}}
					style={styles.image}/>
				<Text style={styles.title}>{this.passProps.comic.name}</Text>
				<Text style={styles.description}>{this.passProps.comic.description}</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		marginTop: 63,
		flex: 1,
		backgroundColor: '#f5fcff',
	},
	title: {
		fontSize: 23,
		color: '#007aff'
	},
	description: {
		marginTop: 10,
		fontSize: 16
	},
	image: {
		alignSelf: 'stretch',
		height: 300
	}
})

module.exports = comicDetailView;