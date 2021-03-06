import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, ImageBackground } from 'react-native';

const BrandRecommandation = () => {
	return (
		<View style={[ styles.view, { margin: 10 } ]}>
			<Text style={{ fontSize: 20, marginLeft: 10 }}>品牌推荐</Text>
			<ScrollView horizontal={true} style={styles.scrollView}>
				<TouchableOpacity style={styles.scrollItem}>
					<Image source={require('../assets/周黑鸭.png')} style={styles.brandBackground} />
				</TouchableOpacity>
				<TouchableOpacity style={styles.scrollItem}>
					<Image source={require('../assets/周黑鸭.png')} style={styles.brandBackground} />
				</TouchableOpacity>
				<TouchableOpacity style={styles.scrollItem}>
					<Image source={require('../assets/周黑鸭.png')} style={styles.brandBackground} />
				</TouchableOpacity>
				<TouchableOpacity style={styles.scrollItem}>
					<Image source={require('../assets/周黑鸭.png')} style={styles.brandBackground} />
				</TouchableOpacity>
				<TouchableOpacity style={styles.scrollItem}>
					<Image source={require('../assets/周黑鸭.png')} style={styles.brandBackground} />
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	view: {
		height: 245,
		marginTop: -5
	},
	scrollView: {
		marginTop: 5
	},
	scrollItem: {
		padding: 8
	},
	brandBackground: {
		width: 90,
		height: 90,
		borderWidth: 1,
		borderColor: 'rgba(128,128,128,0.7)',
		borderRadius: 10
	}
});

export default BrandRecommandation;
