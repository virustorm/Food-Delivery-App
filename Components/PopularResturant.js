import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);

const PopularResturant = () => {
	return (
		<View>
			<TouchableOpacity style={styles.resturantDiv}>
				<Image source={require('../assets/张亮麻辣烫.jpeg')} style={styles.resturantLogo} />
				<View style={styles.resturantTextDiv}>
					<Text>张亮麻辣烫</Text>
					<Text>配送费 $3.49起</Text>
					<View style={styles.resturantBottomTextDiv}>
						<Text>4.6</Text>
						<Text>可自提</Text>
						<Text>自提9折</Text>
						<Text>安新商家</Text>
					</View>
				</View>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	resturantDiv: {
		height: 100,
		borderBottomWidth: 1,
		borderBottomColor: 'black',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 75
	},
	resturantLogo: {
		height: 100,
		width: screenWidth - 50,
		margin: 10
	},
	resturantTextDiv: {
		alignSelf: 'flex-start',
		marginLeft: 25
	},
	resturantBottomTextDiv: {
		flex: 1,
		flexDirection: 'row'
	}
});

export default PopularResturant;
