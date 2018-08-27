import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { authentication } from '../Store/Services/firebase';
import { NoAuthsRoutes } from './NoAuths/NoAuthsRoutes';
import { startSession, closeSession, loggedUser } from '../ActionCreators/index';

const mapStateToProps = state => ({
  state: state,
})

const mapDispatchToProps = dispatch => ({
  authentication: () => {
    authentication.onAuthStateChanged(function(user) {
      if (user){
        dispatch(startSession(user));
        dispatch(loggedUser(user))
      }else {
        dispatch(closeSession());
      }
    })
  }
})

class VerifyIfSession extends Component {
  componentDidMount() {
    this.props.authentication();
  }

  render() {
    console.log(this.props.state);
    return (
      <View style={styles.container}>
        <NoAuthsRoutes />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(VerifyIfSession);
