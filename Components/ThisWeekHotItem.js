import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, ImageBackground } from 'react-native';

const ThisWeekHotItem = () => {
	return (
		<View style={[ styles.view, { margin: 10 } ]}>
			<Text style={{ fontSize: 20, marginLeft: 10 }}>本周特卖</Text>
			<ScrollView horizontal={true} style={styles.scrollView}>
				<TouchableOpacity style={styles.scrollItem}>
					<ImageBackground source={require('../assets/黄焖鸡米饭.jpg')} style={styles.foodBackground}>
						<Text style={styles.scrollItemName}>黄焖鸡米饭</Text>
					</ImageBackground>
					<View style={styles.priceDiv}>
						<Text style={styles.price}>$11.99</Text>
						<Text>杨铭宇黄焖...</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={styles.scrollItem}>
					<ImageBackground source={require('../assets/黄焖鸡米饭.jpg')} style={styles.foodBackground}>
						<Text style={styles.scrollItemName}>黄焖鸡米饭</Text>
					</ImageBackground>
					<View style={styles.priceDiv}>
						<Text style={styles.price}>$11.99</Text>
						<Text>杨铭宇黄焖...</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={styles.scrollItem}>
					<ImageBackground source={require('../assets/黄焖鸡米饭.jpg')} style={styles.foodBackground}>
						<Text style={styles.scrollItemName}>黄焖鸡米饭</Text>
					</ImageBackground>
					<View style={styles.priceDiv}>
						<Text style={styles.price}>$11.99</Text>
						<Text>杨铭宇黄焖...</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={styles.scrollItem}>
					<ImageBackground source={require('../assets/黄焖鸡米饭.jpg')} style={styles.foodBackground}>
						<Text style={styles.scrollItemName}>黄焖鸡米饭</Text>
					</ImageBackground>
					<View style={styles.priceDiv}>
						<Text style={styles.price}>$11.99</Text>
						<Text>杨铭宇黄焖...</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={styles.scrollItem}>
					<ImageBackground source={require('../assets/黄焖鸡米饭.jpg')} style={styles.foodBackground}>
						<Text style={styles.scrollItemName}>黄焖鸡米饭</Text>
					</ImageBackground>
					<View style={styles.priceDiv}>
						<Text style={styles.price}>$11.99</Text>
						<Text>杨铭宇黄焖...</Text>
					</View>
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	view: {
		marginTop: 50,
		height: 245
	},
	scrollView: {
		marginTop: 5
	},
	scrollItem: {
		padding: 7
	},
	foodBackground: {
		minWidth: 140,
		maxHeight: 120
	},
	scrollItemName: {
		marginTop: 130,
		fontSize: 15,
		color: 'white',
		fontWeight: 'bold'
	},
	priceDiv: {
		flex: 1
		// flexDirection: 'row',
	},
	price: {
		color: 'red',
		fontSize: 20,
		marginTop: 5,
		marginBottom: 5
	}
});

export default ThisWeekHotItem;
