import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class Publication extends Component {
  render() {
		const { item, author } = this.props;
		const { width } = Dimensions.get('window');
		const factor = item.width / width;
		const height = item.height / factor;		
		return (
			<View>
				<View style={styles.header}>
					<Image source={author.urlProfilePicture ? { uri: author.urlProfilePicture } : require('../../../assets/blank-profile-picture.png') } style={{ width: 50, height: 50, borderRadius: 25 }}/>
					<Text>{author.username}</Text>
				</View>
				<Image 
					source={{uri: item.pictureUrl}} 
					style={{ width, height }}
				/>
				<View style={styles.footer}>
					<View style={styles.icons}>
						<Ionicons style={styles.likeIcon} name='md-heart-outline' color='#' size={30} />
						<Ionicons style={styles.commentsIcon} name='md-chatboxes' color='#FFF' size={30} />
					</View>
					<View style={styles.comment}>
						<Text>{item.comments}</Text>
					</View>
				</View>
			</View>
			)
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',  
	},
	header: {
		flexDirection: 'row',
		paddingHorizontal: 16,
		marginVertical: 16,
	},
	footer: {
		paddingHorizontal: 16,
	},
	icons: {
		flexDirection: 'row',
	},
	likeIcon: {
		marginLeft: 16,
		marginVertical: 16,
		color: 'pink',
	},
	commentsIcon: {
		marginLeft: 16,
		marginVertical: 16,
		color: 'gray',
	},
	comments: {
		marginBottom: 16,
	}
});


export default Publication;
