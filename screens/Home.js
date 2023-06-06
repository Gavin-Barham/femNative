import React, { useState, useCallback, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import ColorPreview from '../components/ColorPreview';
import ModalViewButton from '../components/ModalViewButton';

const ColorPallete = ({ navigation }) => {
	const URL = 'https://color-palette-api.kadikraman.now.sh/palettes';
	const [palettes, setPalettes] = useState([]);
	const [isRefreshing, setIsRefreshing] = useState(false);
	const handleFetch = useCallback(async () => {
		const res = await fetch(URL);
		if (res.ok) {
			const data = await res.json();
			setPalettes(data);
		}
	}, []);
	const handleRefresh = useCallback(async () => {
		setIsRefreshing(true);
		handleFetch();
		setIsRefreshing(false);
	}, [handleFetch]);

	useEffect(() => {
		handleRefresh();
	});
	return (
		<View>
			<FlatList
				style={{
					padding: 4,
					gap: 6,
				}}
				data={palettes}
				keyExtractor={(item) => item.paletteName}
				renderItem={({ item: { paletteName, colors } }) => {
					return (
						<ColorPreview
							paletteName={paletteName}
							palette={colors}
							handlePress={() => {
								navigation.navigate('ColorPalette', {
									paletteName: paletteName,
									palette: colors,
								});
							}}
						/>
					);
				}}
				ListHeaderComponent={
					<ModalViewButton
						handlePress={() => {
							navigation.navigate('Palette Creator', {
								hello: 'world',
							});
						}}
					/>
				}
				refreshing={isRefreshing}
				onRefresh={handleRefresh}
			/>
		</View>
	);
};

export default ColorPallete;
