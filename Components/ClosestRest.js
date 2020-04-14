import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);

const ClosestRest = () => {
	return (
		<View>
			<TouchableOpacity style={styles.resturantDiv}>
				<Image source={require('../assets/凤鸣粥面.png')} style={styles.resturantLogo} />
				<View style={styles.resturantTextDiv}>
					<Text style={styles.resturantTextDivTitle}>凤鸣粥面</Text>
					<Text style={styles.resturnatTextDivFee}>配送费 $3.49起</Text>
					<View style={styles.resturantBottomTextDiv}>
						<View style={styles.ratingDiv}>
							<Text style={styles.resturantBottomDivRating}>4.6</Text>
							<Image source={require('../assets/starRating.png')} style={styles.ratingStar} />
						</View>

						<Text style={styles.pickup}>可自提</Text>
						<Text style={styles.addon}>自提9折</Text>
						<Text style={[ styles.addon, { paddingTop: 2 } ]}>安新商家</Text>
					</View>
				</View>
			</TouchableOpacity>
			<TouchableOpacity style={styles.resturantDiv}>
				<Image source={require('../assets/凤鸣粥面.png')} style={styles.resturantLogo} />
				<View style={styles.resturantTextDiv}>
					<Text style={styles.resturantTextDivTitle}>凤鸣粥面</Text>
					<Text style={styles.resturnatTextDivFee}>配送费 $3.49起</Text>
					<View style={styles.resturantBottomTextDiv}>
						<View style={styles.ratingDiv}>
							<Text style={styles.resturantBottomDivRating}>4.6</Text>
							<Image source={require('../assets/starRating.png')} style={styles.ratingStar} />
						</View>

						<Text style={styles.pickup}>可自提</Text>
						<Text style={styles.addon}>自提9折</Text>
						<Text style={[ styles.addon, { paddingTop: 2 } ]}>安新商家</Text>
					</View>
				</View>
			</TouchableOpacity>
			<TouchableOpacity style={styles.resturantDiv}>
				<Image source={require('../assets/凤鸣粥面.png')} style={styles.resturantLogo} />
				<View style={styles.resturantTextDiv}>
					<Text style={styles.resturantTextDivTitle}>凤鸣粥面</Text>
					<Text style={styles.resturnatTextDivFee}>配送费 $3.49起</Text>
					<View style={styles.resturantBottomTextDiv}>
						<View style={styles.ratingDiv}>
							<Text style={styles.resturantBottomDivRating}>4.6</Text>
							<Image source={require('../assets/starRating.png')} style={styles.ratingStar} />
						</View>

						<Text style={styles.pickup}>可自提</Text>
						<Text style={styles.addon}>自提9折</Text>
						<Text style={[ styles.addon, { paddingTop: 2 } ]}>安新商家</Text>
					</View>
				</View>
			</TouchableOpacity>
			<TouchableOpacity style={styles.resturantDiv}>
				<Image source={require('../assets/凤鸣粥面.png')} style={styles.resturantLogo} />
				<View style={styles.resturantTextDiv}>
					<Text style={styles.resturantTextDivTitle}>凤鸣粥面</Text>
					<Text style={styles.resturnatTextDivFee}>配送费 $3.49起</Text>
					<View style={styles.resturantBottomTextDiv}>
						<View style={styles.ratingDiv}>
							<Text style={styles.resturantBottomDivRating}>4.6</Text>
							<Image source={require('../assets/starRating.png')} style={styles.ratingStar} />
						</View>

						<Text style={styles.pickup}>可自提</Text>
						<Text style={styles.addon}>自提9折</Text>
						<Text style={[ styles.addon, { paddingTop: 2 } ]}>安新商家</Text>
					</View>
				</View>
			</TouchableOpacity>
			<TouchableOpacity style={styles.resturantDiv}>
				<Image source={require('../assets/凤鸣粥面.png')} style={styles.resturantLogo} />
				<View style={styles.resturantTextDiv}>
					<Text style={styles.resturantTextDivTitle}>凤鸣粥面</Text>
					<Text style={styles.resturnatTextDivFee}>配送费 $3.49起</Text>
					<View style={styles.resturantBottomTextDiv}>
						<View style={styles.ratingDiv}>
							<Text style={styles.resturantBottomDivRating}>4.6</Text>
							<Image source={require('../assets/starRating.png')} style={styles.ratingStar} />
						</View>

						<Text style={styles.pickup}>可自提</Text>
						<Text style={styles.addon}>自提9折</Text>
						<Text style={[ styles.addon, { paddingTop: 2 } ]}>安新商家</Text>
					</View>
				</View>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	resturantDiv: {
		height: 140,
		borderBottomWidth: 1,
		borderBottomColor: 'rgba(0,0,0,0.5)',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 75,
		marginLeft: 20,
		marginRight: 20
	},
	resturantLogo: {
		height: 100,
		width: screenWidth - 40,
		margin: 10,
		resizeMode: 'stretch'
	},
	resturantTextDiv: {
		alignSelf: 'flex-start'
		// marginLeft: 20
	},
	resturantBottomTextDiv: {
		flex: 1,
		flexDirection: 'row',
		width: screenWidth / 1.55
		// justifyContent: 'space-around'
	},
	resturnatTextDivFee: {
		marginBottom: 5,
		marginTop: 6,
		color: 'grey'
	},
	resturantTextDivTitle: {
		fontSize: 18,
		fontWeight: '800'
	},
	resturantBottomDivRating: {
		color: 'white',
		fontWeight: '500'
	},
	ratingStar: {
		height: 10,
		width: 10,
		margin: 'auto'
	},
	ratingDiv: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#fc6f03',
		justifyContent: 'space-evenly',
		height: 20
	},
	pickup: {
		borderWidth: 1,
		borderColor: 'grey',
		height: 20,
		paddingTop: 2,
		marginLeft: 10,
		width: 45,
		textAlign: 'center'
	},
	addon: {
		color: '#fc6f03',
		borderColor: '#fc6f03',
		borderWidth: 1,
		height: 20,
		marginLeft: 10,
		paddingTop: 1,
		paddingLeft: 1,
		paddingRight: 1,
		width: 60,
		textAlign: 'center'
	}
});

export default ClosestRest;
