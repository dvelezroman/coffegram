import React from 'react';
import { Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import SignIn from './SignIn';
import SignUp from './SignUp';

const NoAuthsRoutes = createStackNavigator({
	SignIn: {
		screen: SignIn,
	},
	SignUp: {
		screen: SignUp,
	}
},
{
	headerMode: 'none',
});

export { NoAuthsRoutes };