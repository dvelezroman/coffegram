import { createStackNavigator } from 'react-navigation';
import { TabFollow } from './TabFollow';
import Author from './Profile';
import Publication from './Publication';
import Comments from './Comments';

const StackFollow = createStackNavigator({
	TabFollow: {
		screen: TabFollow,
	},
	Author: {
		screen: Author,
	},
	Publication: {
		screen: Publication,
	},
	Comments: {
		screen: Comments,
	}
});

export { StackFollow };