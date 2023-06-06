import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	FlatList,
	StyleSheet,
} from 'react-native';

const ColorPreview = ({ paletteName, palette, handlePress }) => {
	return (
		<TouchableOpacity style={{ marginVertical: 12 }} onPress={handlePress}>
			<Text
				style={{
					fontWeight: 'bold',
					fontSize: 18,
					marginVertical: 5,
				}}
			>
				{paletteName}
			</Text>
			<FlatList
				style={{ flexDirection: 'row', gap: 8 }}
				data={palette.slice(0, 5)}
				keyExtractor={(item) => `${item.colorName}${item.hexCode}`}
				renderItem={({ item: { hexCode } }) => {
					return (
						<View
							style={[
								styles.smallBox,
								{
									backgroundColor: hexCode,
								},
							]}
						/>
					);
				}}
			/>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	smallBox: {
		width: 30,
		height: 30,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.3,
		shadowRadius: 1,
		elevation: 2,
	},
});

export default ColorPreview;
