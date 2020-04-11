import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import Header from './Components/Header';
import LimitDiscount from './Components/LimitDiscount';
import ThisWeekHotItem from './Components/ThisWeekHotItem';
import BrandRecommandation from './Components/BrandRecommandation';
import PopularResturant from './Components/PopularResturant';

const screenWidth = Math.round(Dimensions.get('window').width);

const App = () => {
	const [ currentTab, setCurrentTab ] = useState('热门餐厅');

	if (currentTab == '热门餐厅') {
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
				<View style={styles.restTab}>
					<TouchableOpacity style={{ ...styles.tabHeader, borderBottomColor: 'black', borderBottomWidth: 1 }}>
						<Text
							style={{
								fontSize: 20,
								paddingBottom: 8
							}}
						>
							热门餐厅
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.tabHeader}>
						<Text style={styles.tabText}>推荐餐厅</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.tabHeader}>
						<Text style={styles.tabText}>距离最近</Text>
					</TouchableOpacity>
				</View>
				<PopularResturant />
			</ScrollView>
		);
	}
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
