import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native';

const ColorToggler = ({ colorName, hexCode, setColorList, colorList }) => {
	const [isActive, setIsActive] = useState(false);

	const handleToggle = () => {
		if (isActive) {
			setColorList((prevList) => prevList.push({ colorName, hexCode }));
		} else {
			setColorList((prevList) =>
				prevList.filter(
					(item) =>
						item.colorName !== colorName &&
						item.hexCode !== hexCode,
				),
			);
		}
		setIsActive((prevIsActive) => !prevIsActive);
		console.log(colorList);
	};
	return (
		<View
			style={{
				backgroundColor: hexCode,
				paddingVertical: 5,
				justifyContent: 'space-between',
				flexDirection: 'row',
			}}
		>
			<Text
				style={{
					color:
						parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1
							? 'black'
							: 'white',
				}}
			>
				{colorName}
			</Text>
			<Switch
				style={{ right: 0 }}
				onChange={handleToggle}
				value={isActive}
			/>
		</View>
	);
};

export default ColorToggler;

// {
//      paletteName: '',
//      colors: [{
//          colorName: '',
//          hexCode: ''
//      }],
// };
