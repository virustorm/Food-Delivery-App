import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import Header from './Components/Header';
import LimitDiscount from './Components/LimitDiscount';
import ThisWeekHotItem from './Components/ThisWeekHotItem';
import BrandRecommandation from './Components/BrandRecommandation';
import PopularResturant from './Components/PopularResturant';
import RecommandedRest from './Components/RecommandedRest';
import ClosestRest from './Components/ClosestRest';

const screenWidth = Math.round(Dimensions.get('window').width);

const App = () => {
	const [ currentTab, setCurrentTab ] = useState('热门餐厅');
	const [ currentNavBColor, setNavColor ] = useState('transparent');

	const checkYPos = (event) => {
		const newColor = event.nativeEvent.contentOffset.y > 75 ? 'white' : 'transparent';
		setNavColor(newColor);
	};

	if (currentTab == '热门餐厅') {
		return (
			<View style={{ position: 'relative' }}>
				<View style={[ styles.view, { backgroundColor: currentNavBColor } ]}>
					{/* <Text>4333 Central</Text> */}
				</View>
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
	} else if (currentTab == '推荐餐厅') {
		return (
			<View style={{ position: 'relative' }}>
				<View style={[ styles.view, { backgroundColor: currentNavBColor } ]} />
				<ScrollView style={styles.container} onScroll={checkYPos} scrollEventThrottle={1}>
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
					<TouchableOpacity style={styles.middleImgDiv}>
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
};

const styles = StyleSheet.create({
	container: {
		width: screenWidth,
		position: 'relative'
	},
	view: {
		zIndex: 1,
		height: 90,
		width: screenWidth,
		position: 'absolute',
		top: 0,
		right: 0,
		left: 0,
		flex: 1
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

export default App;
