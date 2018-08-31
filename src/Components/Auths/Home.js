import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';
import { getPublications } from '../../ActionCreators/index';

class Home extends Component {
  componentDidMount() {
    this.props.getPublications();
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
      	<Text>Home</Text>
        <Button 
        title="Author"
        onPress={() => { navigation.navigate('Author'); }}
        />
        <Button 
        title="Comments"
        onPress={() => { navigation.navigate('Comments')}}
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

const mapStateToProps = state => ({
  pictures: state.publicationsReducer,
});

const mapDispatchToProps = dispatch => ({
  getPublications: () => dispatch(getPublications()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);