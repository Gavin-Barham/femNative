import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColoredBoxes = ({ colorName, hexCode }) => {
	return (
		<View style={[styles.box, { backgroundColor: hexCode }]}>
			<Text
				style={[
					{
						color:
							parseInt(hexCode.replace('#', ''), 16) >
							0xffffff / 1.1
								? 'black'
								: 'white',
					},
				]}
			>
				{colorName} {hexCode}
			</Text>
		</View>
	);
};
const styles = StyleSheet.create({
	box: {
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: 10,
		padding: 10,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.3,
		shadowRadius: 1,
		elevation: 2,
	},
	whiteText: {
		color: 'white',
		fontWeight: 'bold',
	},
});

export default ColoredBoxes;
