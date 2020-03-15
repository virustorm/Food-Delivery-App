import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import Header from './Components/Header';
import LimitDiscount from './Components/LimitDiscount';

const screenWidth = Math.round(Dimensions.get('window').width);

const App = () => {
	return (
		<View style={styles.container}>
			<Header />
			<TouchableOpacity style={styles.middleImgDiv}>
				<Image source={require('./assets/howcuttingdo.jpg')} style={styles.nofee} />
			</TouchableOpacity>
			<LimitDiscount />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: screenWidth
	},
	middleImgDiv: {
		flex: 1,
		alignItems: 'center'
	},
	nofee: {
		height: 100,
		marginTop: 150,
		width: screenWidth - 50
	}
});

export default App;
