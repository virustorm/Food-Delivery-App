import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';
import backGroundImage1 from '../assets/food-background-1.jpg';

const Header = () => {
	return (
		<ImageBackground source={backGroundImage1} style={styles.backgroundImg}>
			<View style={styles.view}>
				<TouchableOpacity style={[ styles.button, { backgroundColor: 'rgba(25, 190, 63, 0.89)' } ]}>
					<Image source={require('../assets/spoon-512.png')} style={styles.buttonImg} />
					<Text style={styles.buttonText}>外卖</Text>
				</TouchableOpacity>
				<TouchableOpacity style={[ styles.button, { backgroundColor: 'rgba(251, 191, 50, 0.89)' } ]}>
					<Image source={require('../assets/bag.png')} style={[ styles.buttonImg, { marginLeft: 11 } ]} />
					<Text style={styles.buttonLongText}>到店自取</Text>
				</TouchableOpacity>
				<TouchableOpacity style={[ styles.button, { backgroundColor: 'rgba(23, 191, 207, 0.9)' } ]}>
					<Image source={require('../assets/shop.png')} style={[ styles.buttonImg, { marginLeft: 10 } ]} />
					<Text style={styles.buttonLongText}>百货商场</Text>
				</TouchableOpacity>
				<TouchableOpacity style={[ styles.button, { backgroundColor: 'rgba(247, 78, 75, 0.9)' } ]}>
					<Image
						source={require('../assets/onigiri-512.png')}
						style={[ styles.buttonImg, { marginLeft: 10 } ]}
					/>
					<Text style={styles.buttonLongText}>饭团点评</Text>
				</TouchableOpacity>
				<TouchableOpacity style={[ styles.button, { backgroundColor: 'rgba(35, 76, 190, 0.9)' } ]}>
					<Image source={require('../assets/run.png')} style={[ styles.buttonImg, { marginLeft: 9 } ]} />
					<Text style={styles.buttonText}>跑腿</Text>
				</TouchableOpacity>
			</View>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	backgroundImg: {
		resizeMode: 'cover',
		height: 200,
		alignSelf: 'stretch'
	},
	view: {
		marginTop: 175,
		marginLeft: 10,
		marginRight: 10,
		height: 100,
		backgroundColor: 'white',
		borderRadius: 40 / 5,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 3
		},
		shadowOpacity: 0.27,
		shadowRadius: 4.65,
		elevation: 6,
		flex: 1,
		justifyContent: 'space-evenly',
		alignItems: 'center',
		flexDirection: 'row',
		flexShrink: 0,
		minHeight: 100
	},
	button: {
		height: 50,
		width: 50,
		borderRadius: 50 / 2,
		flex: 1,
		flexShrink: 0,
		maxHeight: 50,
		maxWidth: 50,
		marginBottom: 10
	},
	buttonImg: {
		height: 30,
		width: 30,
		marginLeft: 8,
		marginTop: 8
	},
	buttonText: {
		marginTop: 15,
		marginLeft: 10,
		fontSize: 13,
		width: 100
	},
	buttonLongText: {
		marginTop: 15,
		fontSize: 13,
		width: 100
	}
});

export default Header;
