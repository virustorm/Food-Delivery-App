import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import backGroundImage1 from '../assets/food-background-1.jpg';

const Header = () => {
	return (
		<ImageBackground source={backGroundImage1} style={styles.backgroundImg}>
			<View style={styles.view} />
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

		elevation: 6
	}
});

export default Header;
