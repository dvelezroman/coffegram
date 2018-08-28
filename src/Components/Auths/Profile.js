import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';
import { closeSession, userSignOut } from '../../ActionCreators/index';
import { authentication } from '../../Store/Services/firebase';

const mapStateToProps = state => ({
	
});

const mapDispatchToProps = dispatch => ({
  closeSession: () => dispatch(closeSession()),
  userSignOut: () => dispatch(userSignOut()),
})

class Profile extends Component {
  userSignOutHandler = () => {
    authentication.signOut();
    this.props.closeSession();
    this.props.userSignOut();
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
      	<Text>Profile</Text>
        <Button 
        title='Post'
        onPress={() => { navigation.navigate('Post'); }}
        />
        <Button 
        title='Sign out' 
        onPress={this.userSignOutHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center', 
	}
});


export default connect(mapStateToProps, mapDispatchToProps)(Profile);