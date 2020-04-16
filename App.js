import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, ScrollView, TextInput } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

import Home from './Components/Home';

const screenWidth = Math.round(Dimensions.get('window').width);

export default class App extends Component {
	render() {
		return <Home />;
	}
}
