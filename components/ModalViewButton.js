import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const ModalViewButton = ({ handlePress }) => {
	return (
		<TouchableOpacity style={{ marginVertical: 12 }} onPress={handlePress}>
			<Text
				style={{
					fontWeight: 'bold',
					fontSize: 22,
					marginVertical: 5,
					color: 'teal',
				}}
			>
				Add Color Palette
			</Text>
		</TouchableOpacity>
	);
};

export default ModalViewButton;
