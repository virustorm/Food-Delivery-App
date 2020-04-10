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
						<Text style={styles.newPrice}>$6.99</Text>
						<Text style={styles.oldPrice}>$9.99</Text>
					</View>
					<Text>澳门豆捞</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.scrollItem}>
					<ImageBackground source={require('../assets/fish.jpg')} style={styles.foodBackground}>
						<Text style={styles.scrollItemName}>[特惠] 龙利鱼片</Text>
					</ImageBackground>
					<View style={styles.priceDiv}>
						<Text style={styles.newPrice}>$6.99</Text>
						<Text style={styles.oldPrice}>$9.99</Text>
					</View>
					<Text>澳门豆捞</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.scrollItem}>
					<ImageBackground source={require('../assets/fish.jpg')} style={styles.foodBackground}>
						<Text style={styles.scrollItemName}>[特惠] 龙利鱼片</Text>
					</ImageBackground>
					<View style={styles.priceDiv}>
						<Text style={styles.newPrice}>$6.99</Text>
						<Text style={styles.oldPrice}>$9.99</Text>
					</View>
					<Text>澳门豆捞</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.scrollItem}>
					<ImageBackground source={require('../assets/fish.jpg')} style={styles.foodBackground}>
						<Text style={styles.scrollItemName}>[特惠] 龙利鱼片</Text>
					</ImageBackground>
					<View style={styles.priceDiv}>
						<Text style={styles.newPrice}>$6.99</Text>
						<Text style={styles.oldPrice}>$9.99</Text>
					</View>
					<Text>澳门豆捞</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.scrollItem}>
					<ImageBackground source={require('../assets/fish.jpg')} style={styles.foodBackground}>
						<Text style={styles.scrollItemName}>[特惠] 龙利鱼片</Text>
					</ImageBackground>
					<View style={styles.priceDiv}>
						<Text style={styles.newPrice}>$6.99</Text>
						<Text style={styles.oldPrice}>$9.99</Text>
					</View>
					<Text>澳门豆捞</Text>
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
		padding: 10
	},
	foodBackground: {
		minWidth: 135,
		minHeight: 140
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
	},
	newPrice: {
		color: 'red',
		fontSize: 20,
		marginTop: 5
	},
	oldPrice: {
		marginLeft: 10,
		marginTop: 3,
		textDecorationLine: 'line-through'
	}
});

export default LimitDiscount;
