import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, ImageBackground } from 'react-native';

const LimitDiscount = () => {
	return (
		<View style={[ styles.view, { margin: 10 } ]}>
			<Text style={{ fontSize: 20, marginLeft: 10 }}>限时优惠</Text>
			<ScrollView horizontal={true} style={styles.scrollView}>
				<TouchableOpacity style={styles.scrollItem}>
					<ImageBackground source={require('../assets/fish.jpg')} style={styles.foodBackground}>
						<Text style={styles.scrollItemName}>[特惠] 龙利鱼片</Text>
					</ImageBackground>
					<View style={styles.priceDiv}>
						<Text style={{ color: 'red', fontSize: 20, marginTop: 5 }}>$6.99</Text>
						<Text style={{ marginLeft: 10, marginTop: 3, textDecorationLine: 'line-through' }}>$9.99</Text>
					</View>
					<Text>澳门豆捞</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.scrollItem}>
					<ImageBackground source={require('../assets/fish.jpg')} style={styles.foodBackground}>
						<Text style={styles.scrollItemName}>[特惠] 龙利鱼片</Text>
					</ImageBackground>
					<View style={styles.priceDiv}>
						<Text style={{ color: 'red', fontSize: 20, marginTop: 5 }}>$6.99</Text>
						<Text style={{ marginLeft: 10, marginTop: 3, textDecorationLine: 'line-through' }}>$9.99</Text>
					</View>
					<Text>澳门豆捞</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.scrollItem}>
					<ImageBackground source={require('../assets/fish.jpg')} style={styles.foodBackground}>
						<Text style={styles.scrollItemName}>[特惠] 龙利鱼片</Text>
					</ImageBackground>
					<View style={styles.priceDiv}>
						<Text style={{ color: 'red', fontSize: 20, marginTop: 5 }}>$6.99</Text>
						<Text style={{ marginLeft: 10, marginTop: 3, textDecorationLine: 'line-through' }}>$9.99</Text>
					</View>
					<Text>澳门豆捞</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.scrollItem}>
					<ImageBackground source={require('../assets/fish.jpg')} style={styles.foodBackground}>
						<Text style={styles.scrollItemName}>[特惠] 龙利鱼片</Text>
					</ImageBackground>
					<View style={styles.priceDiv}>
						<Text style={{ color: 'red', fontSize: 20, marginTop: 5 }}>$6.99</Text>
						<Text style={{ marginLeft: 10, marginTop: 3, textDecorationLine: 'line-through' }}>$9.99</Text>
					</View>
					<Text>澳门豆捞</Text>
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	view: {
		marginTop: 300,
		height: 245
	},
	scrollItem: {
		padding: 10
	},
	foodBackground: {
		minWidth: 150,
		minHeight: 150
	},
	scrollItemName: {
		marginTop: 130,
		fontSize: 15,
		color: 'white',
		fontWeight: 'bold'
	},
	priceDiv: {
		flex: 1,
		flexDirection: 'row'
	}
});

export default LimitDiscount;
