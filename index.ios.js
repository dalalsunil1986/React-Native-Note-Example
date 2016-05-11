/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, View, NavigatorIOS, AlertIOS} from 'react-native';
import {Provider} from 'react-redux';

import Notes from './app/components/Notes';
import Note from './app/components/Note';
import styles from './app/styles/'
import configureStore from './app/createStore';
import * as actions from './app/actions/';

var store = configureStore();
var nav

store.subscribe(() => {
    var notes = store.getState();
    // Save the notes
});

// Populate the notes

// Router
var routes = () => {
  var note = (id) => {
    return {
      component: Note,
      passProps: {id}
    };
  };
  var notes = {
    component: Notes,
    title: 'Notes',
    rightButtonTitle: 'Create',
    onRightButtonPress: function() {
      var noteId = store.dispatch(actions.startCreateNote());
      nav.push(note(noteId))
    },
    passProps: {
      showNote: (noteId) => {
        nav.push(note(noteId));
      }
    }
  };

  return {notes, note};
};

// Init component
class NotesApp extends Component {
  componentDidMount() {
    nav = this.refs.nav;
  }
  render() {
    return (
      <Provider store={store}>
        <NavigatorIOS ref="nav" style={styles.container} itemWrapperStyle={styles.scene} initialRoute={routes().notes}></NavigatorIOS>
      </Provider>
    );
  }
};

AppRegistry.registerComponent('NotesApp', () => NotesApp);
