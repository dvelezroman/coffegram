import { createStackNavigator } from 'react-navigation';
import Home from './Home';
import Profile from './Profile';
import Post from './Post';
import Comments from './Comments';

const StackHome = createStackNavigator({
	Home: {
		screen: Home,
	},
	Author: {
		screen: Profile,
	},
	Post: {
		screen: Post,
	},
	Comments: {
		screen: Comments,
	}
});

export { StackHome };