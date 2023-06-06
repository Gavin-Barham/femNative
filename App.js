import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ColorPalette from './screens/ColorPalette';
import Home from './screens/Home';
import Modal from './screens/Modal';

const rootStack = createStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<rootStack.Navigator>
				<rootStack.Group>
					<rootStack.Screen name="Home" component={Home} />
					<rootStack.Screen
						name="ColorPalette"
						component={ColorPalette}
						options={({ route }) => ({
							title: route.params.paletteName,
						})}
					/>
				</rootStack.Group>
				<rootStack.Group screenOptions={{ presentation: 'modal' }}>
					<rootStack.Screen
						name="Palette Creator"
						component={Modal}
					/>
				</rootStack.Group>
			</rootStack.Navigator>
		</NavigationContainer>
	);
};

export default App;
