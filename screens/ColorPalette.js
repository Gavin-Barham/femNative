import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ColoredBoxes from '../components/ColoredBoxes';

const ColorPalette = ({ route }) => {
	const { palette } = route.params;
	return (
		<FlatList
			style={styles.container}
			data={palette}
			keyExtractor={(item) => item.hexCode}
			renderItem={({ item: { colorName, hexCode } }) => {
				return <ColoredBoxes colorName={colorName} hexCode={hexCode} />;
			}}
		/>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	safeArea: {
		flex: 1,
	},
	container: {
		paddingHorizontal: 10,
		paddingTop: 10,
		backgroundColor: 'white',
	},
});

export default ColorPalette;
