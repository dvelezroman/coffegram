import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button, FlatList, Image } from 'react-native';
import { getPublications, resetPublishState } from '../../ActionCreators/index';
import Publication from './Publication';

class Home extends Component {
  componentDidMount() {
    this.props.getPublications();
  }

  render() {
    const { navigation, publications, authors } = this.props;
    return (
      <View style={styles.container}>
      	<FlatList
          data={publications} 
          renderItem={({ item, index }) => <Publication item={ item } author={authors[index]} />}
          ItemSeparatorComponent={() => (<View style={styles.separator}/>)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
    alignItems: 'center',
  },
  separator: {
    borderWidth: 1,
    borderColor: '#C0C0C0',
  }
});

const mapStateToProps = state => ({
  publications: state.publicationsReducer.publications,
  authors: state.authorsReducer.authors,
  publishState: state.publishStateReducer.info,
});

const mapDispatchToProps = dispatch => ({
  getPublications: () => dispatch(getPublications()),
  resetPublishState: () => dispatch(resetPublishState()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);