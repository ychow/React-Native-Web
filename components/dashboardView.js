
'use strict'

import React,{
	Component,
	Text,
	View,
	StyleSheet,
	ListView,
	Image,
	TouchableHighlight
} from 'react-native';

import Crypto from 'crypto-js';
import ComicDetailView from './comicDetailView';


const REQUEST_URL = "http://gateway.marvel.com:80/v1/public/characters";


class dashboardView extends Component{
	constructor(props){
		super(props)

		this.timestamp = 1;
		this.public_key = 'b929178306e1e2fd82dbcf198def5c7c';
		this.private_key = 'fe4e584ac5004a567325659e19e3ac6b5640d97b';
		this.state = {
			dataSource: new ListView.DataSource({
				rowHasChanged: (row1, row2) => row1 !== row2
			}),
			loaded: false
		}
	}

	componentDidMount(){
		this.fetchData();
	}

	fetchData(){
		var hash = Crypto.MD5(this.timestamp + this.private_key + this.public_key );

		fetch(REQUEST_URL +'?ts='+this.timestamp+'&apikey='+this.public_key+'&hash='+hash)
		.then((response) => response.json())
		.then((responseData) => {
			this.setState({
				dataSource: this.state.dataSource.cloneWithRows(responseData.data.results),
				loaded: true
			})
		})
	}

	renderLoadingView(){
		return(
			<View style={styles.container}>
				<Text style={styles.loading}>正在加载中...</Text>
			</View>
		)
	}

	renderComic(comic){
		return(
			<TouchableHighlight onPress={() => this.onComicPress(comic)}>
			  <Image
			    style={styles.backgroundImage}
			    source={{uri: comic.thumbnail.path+'.jpg'}} >
			    <View style={styles.rightContainer}>
					<Text style={styles.title}>{comic.name}</Text>
					<Text style={styles.available}>{comic.comics.available}</Text>
			    </View>
			  </Image>
			</TouchableHighlight>
		)
	}

	onComicPress(comic){
		this.props.navigator.push({
			name: '详情',
			title: 'comic.name',
			passProps: {comic: comic}
		});
	}

	render() {
		if(!this.state.loaded){
			return this.renderLoadingView()
		}
		return(
			<ListView
			  style={styles.listView}
			  dataSource={this.state.dataSource}
			  renderRow={this.renderComic.bind(this)}/>
			
		);
	}
}

const styles = StyleSheet.create({
	container: {
	    flexDirection: 'row',
	    justifyContent: 'center',
	    alignItems: 'center',
	    backgroundColor: '#f5fcff'
	},
	loading: {
		marginTop: 100
	},
	backgroundImage: {
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'stretch',
		height: 150
	},
	rightContainer: {
		backgroundColor: 'rgba(52,52,52,.5)',
		alignSelf: 'stretch',
		paddingTop: 30,
		height: 150
	},
	title: {
		fontSize: 27,
		marginBottom: 8,
		textAlign: 'center',
		color: '#fff',
		backgroundColor: 'rgba(52,52,52,.0)'
	},
	available: {
		fontSize: 18,
		textAlign: 'center',
		color: '#fff',
		backgroundColor: 'rgba(52,52,52,.0)'
	},
	listView: {
		paddingTop: 64,
		marginBottom: 49
	}
})

module.exports = dashboardView;