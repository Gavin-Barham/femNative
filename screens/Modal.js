import React, { useState } from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';
import COLORS from '../data.js';
import ColorToggler from '../components/ColorToggler';

const Modal = () => {
	const [colorList, setColorList] = useState([]);
	return (
		<FlatList
			style={{
				padding: 4,
				gap: 6,
			}}
			data={COLORS}
			keyExtractor={(item) => `${item.hexCode}-${item.colorName}`}
			renderItem={({ item: { colorName, hexCode } }) => {
				return (
					<ColorToggler
						colorName={colorName}
						hexCode={hexCode}
						setColorList={setColorList}
						colorList={colorList}
					/>
				);
			}}
			ListHeaderComponent={
				<View
					style={{
						marginHorizontal: 20,
						// alignItems: 'center',
						// justifyContent: 'center',
					}}
				>
					<Text style={{ marginVertical: 10 }}>
						Name of your color palette
					</Text>
					<TextInput
						style={{
							borderColor: 'black',
							borderWidth: 1,
							borderRadius: 4,
							paddingVertical: 12,
							marginBottom: 10,
						}}
						inputMode="text"
						placeholder=""
					/>
				</View>
			}
		/>
	);
};

export default Modal;
