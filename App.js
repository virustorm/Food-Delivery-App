import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, ScrollView, TextInput } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import Geocoder from 'react-native-geocoding';

import Header from './Components/Header';
import LimitDiscount from './Components/LimitDiscount';
import ThisWeekHotItem from './Components/ThisWeekHotItem';
import BrandRecommandation from './Components/BrandRecommandation';
import PopularResturant from './Components/PopularResturant';
import RecommandedRest from './Components/RecommandedRest';
import ClosestRest from './Components/ClosestRest';

const screenWidth = Math.round(Dimensions.get('window').width);

Geocoder.init('AIzaSyC_f-DBHL8cc-MhQSPAYMdGRWkInlwY7GQ', { language: 'en' });

export default class App extends Component {
	state = {
		currentTab: '热门餐厅',
		currentNavBColor: 'transparent',
		errorCode: '',
		userLocation: {},
		userAddress: '',
		navAddressColor: 'white'
	};

	componentDidMount() {
		this._getLocation();
	}

	componentDidUpdate() {
		if (this.state.userLocation != {}) {
			Geocoder.from(this.state.userLocation.coords.latitude, this.state.userLocation.coords.longitude)
				.then((json) => {
					var addressComponent =
						json.results[0].address_components[0].short_name +
						' ' +
						json.results[0].address_components[1].short_name +
						' ' +
						json.results[0].address_components[3].short_name +
						' ' +
						json.results[0].address_components[5].short_name +
						' ' +
						json.results[0].address_components[6].short_name +
						' ' +
						json.results[0].address_components[7].short_name;
					// console.log(addressComponent);
					this.setState({
						userAddress: addressComponent
					});
				})
				.catch((error) => console.warn(error));
		}
	}

	_getLocation = async () => {
		const { status } = await Permissions.askAsync(Permissions.LOCATION);

		if (status !== 'granted') {
			console.log('PERMISSION NOT GRANTED');

			this.setState({
				errorCode: 'PERMISSION NOT GRANTED'
			});
		}

		const newUserLocation = await Location.getCurrentPositionAsync();
		// console.log(newUserLocation);
		this.setState({
			userLocation: newUserLocation
		});
	};

	checkYPos = (event) => {
		const newColor = event.nativeEvent.contentOffset.y > 75 ? 'white' : 'transparent';
		const newAddressColor = event.nativeEvent.contentOffset.y > 75 ? 'black' : 'white';
		this.setState({
			currentNavBColor: newColor,
			navAddressColor: newAddressColor
		});
	};

	render() {
		if (this.state.currentTab == '热门餐厅') {
			return (
				<View style={{ position: 'relative' }}>
					<View style={[ styles.navBar, { backgroundColor: this.state.currentNavBColor } ]}>
						<Text numberOfLines={1} style={[ styles.navBarAddress, { color: this.state.navAddressColor } ]}>
							{this.state.userAddress}
						</Text>
						<TextInput style={styles.navBarInput} placeholder="搜索商家" />
					</View>
					<ScrollView style={styles.container} onScroll={this.checkYPos} scrollEventThrottle={1}>
						<Header />
						<TouchableOpacity style={styles.middleImgDiv}>
							<Image source={require('./assets/howcuttingdo.jpg')} style={styles.nofee} />
						</TouchableOpacity>
						<LimitDiscount />
						<TouchableOpacity style={[ styles.middleImgDiv, { marginTop: 0 } ]}>
							<Image source={require('./assets/hotpotPromo.jpeg')} style={styles.hotpotPromo} />
						</TouchableOpacity>
						<ThisWeekHotItem />
						<BrandRecommandation />
						<View style={styles.restTab}>
							<TouchableOpacity
								style={{ ...styles.tabHeader, borderBottomColor: 'black', borderBottomWidth: 1 }}
								onPress={() => {
									setCurrentTab('热门餐厅');
								}}
							>
								<Text
									style={{
										fontSize: 20,
										paddingBottom: 8
									}}
								>
									热门餐厅
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={styles.tabHeader}
								onPress={() => {
									setCurrentTab('推荐餐厅');
								}}
							>
								<Text style={styles.tabText}>推荐餐厅</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={styles.tabHeader}
								onPress={() => {
									setCurrentTab('距离最近');
								}}
							>
								<Text style={styles.tabText}>距离最近</Text>
							</TouchableOpacity>
						</View>
						<PopularResturant />
					</ScrollView>
				</View>
			);
		} else if (this.state.currentTab == '推荐餐厅') {
			return (
				<View style={{ position: 'relative' }}>
					<View style={[ styles.view, { backgroundColor: currentNavBColor } ]} />
					<ScrollView style={styles.container} onScroll={checkYPos} scrollEventThrottle={1}>
						<Header />
						<TouchableOpacity style={styles.middleImgDiv}>
							<Image source={require('./assets/howcuttingdo.jpg')} style={styles.nofee} />
						</TouchableOpacity>
						<LimitDiscount />
						<TouchableOpacity style={[ styles.middleImgDiv, { marginTop: 0 } ]}>
							<Image source={require('./assets/hotpotPromo.jpeg')} style={styles.hotpotPromo} />
						</TouchableOpacity>
						<ThisWeekHotItem />
						<BrandRecommandation />
						<View style={styles.restTab}>
							<TouchableOpacity
								style={styles.tabHeader}
								onPress={() => {
									setCurrentTab('热门餐厅');
								}}
							>
								<Text style={styles.tabText}>热门餐厅</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={{ ...styles.tabHeader, borderBottomColor: 'black', borderBottomWidth: 1 }}
								onPress={() => {
									setCurrentTab('推荐餐厅');
								}}
							>
								<Text
									style={{
										fontSize: 20,
										paddingBottom: 8
									}}
								>
									推荐餐厅
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={styles.tabHeader}
								onPress={() => {
									setCurrentTab('距离最近');
								}}
							>
								<Text style={styles.tabText}>距离最近</Text>
							</TouchableOpacity>
						</View>
						<RecommandedRest />
					</ScrollView>
				</View>
			);
		} else {
			return (
				<View style={{ position: 'relative' }}>
					<View style={[ styles.view, { backgroundColor: currentNavBColor } ]} />

					<ScrollView style={styles.container} onScroll={checkYPos} scrollEventThrottle={1}>
						<Header />
						<TouchableOpacity style={styles.middleImgDiv}>
							<Image source={require('./assets/howcuttingdo.jpg')} style={styles.nofee} />
						</TouchableOpacity>
						<LimitDiscount />
						<TouchableOpacity style={[ styles.middleImgDiv, { marginTop: 0 } ]}>
							<Image source={require('./assets/hotpotPromo.jpeg')} style={styles.hotpotPromo} />
						</TouchableOpacity>
						<ThisWeekHotItem />
						<BrandRecommandation />
						<View style={styles.restTab}>
							<TouchableOpacity
								style={styles.tabHeader}
								onPress={() => {
									setCurrentTab('热门餐厅');
								}}
							>
								<Text style={styles.tabText}>热门餐厅</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={styles.tabHeader}
								onPress={() => {
									setCurrentTab('推荐餐厅');
								}}
							>
								<Text style={styles.tabText}>推荐餐厅</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={{ ...styles.tabHeader, borderBottomColor: 'black', borderBottomWidth: 1 }}
								onPress={() => {
									setCurrentTab('距离最近');
								}}
							>
								<Text
									style={{
										fontSize: 20,
										paddingBottom: 8
									}}
								>
									距离最近
								</Text>
							</TouchableOpacity>
						</View>
						<ClosestRest />
					</ScrollView>
				</View>
			);
		}
	}
}

const styles = StyleSheet.create({
	container: {
		width: screenWidth,
		position: 'relative'
	},
	navBar: {
		zIndex: 1,
		height: 90,
		width: screenWidth,
		position: 'absolute',
		top: 0,
		right: 0,
		left: 0,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: 20
	},
	navBarAddress: {
		width: 190,
		height: 20,
		fontWeight: '600',
		fontSize: 17,
		marginTop: 23
	},
	navBarInput: {
		width: 125,
		height: 25,
		borderRadius: 10,
		backgroundColor: 'rgba(242,242,242,1)',
		marginTop: 25
	},
	middleImgDiv: {
		flex: 1,
		alignItems: 'center',
		marginTop: 160
	},
	nofee: {
		height: 100,
		width: screenWidth - 50
	},
	hotpotPromo: {
		height: 70,
		marginTop: 10,
		width: screenWidth - 50
	},
	restTab: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		width: screenWidth / 1.5,
		marginLeft: 10,
		marginTop: -100
	},
	tabText: {
		fontSize: 17
	}
});
