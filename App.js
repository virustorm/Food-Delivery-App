import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import Header from './Components/Header';
import LimitDiscount from './Components/LimitDiscount';
import ThisWeekHotItem from './Components/ThisWeekHotItem';
import BrandRecommandation from './Components/BrandRecommandation';

const screenWidth = Math.round(Dimensions.get('window').width);

const App = () => {
	return (
		<ScrollView style={styles.container}>
			<Header />
			<TouchableOpacity style={styles.middleImgDiv}>
				<Image source={require('./assets/howcuttingdo.jpg')} style={styles.nofee} />
			</TouchableOpacity>
			<LimitDiscount />
			<TouchableOpacity style={styles.middleImgDiv}>
				<Image source={require('./assets/hotpotPromo.jpeg')} style={styles.hotpotPromo} />
			</TouchableOpacity>
			<ThisWeekHotItem />
			<BrandRecommandation />
		</ScrollView>
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
	},
	hotpotPromo: {
		height: 70,
		marginTop: 10,
		width: screenWidth - 50
	}
});

export default App;
