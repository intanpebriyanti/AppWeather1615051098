import React from 'react';
import {Text, View } from 'react-native';

const Header = () => {
	const{textStyle, backHeader } = styles;
	return (
		<view style= {backHeader}>
		<Text style={textStyle}>Ini Header</Text>
		</view>
		);
};
const styles = {
	backHeader: {
		backgroundColor: '#3F51B5',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		marginTop: 5,
		position: 'relative'
	},
	textStyles: {
		fontSize: 25,
		color: '#fff',
		textAlign: 'center'
	}
};

export default Header;
