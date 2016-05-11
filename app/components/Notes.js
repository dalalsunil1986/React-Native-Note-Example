import moment from 'moment';
import React from 'react';
import {connect} from 'react-redux';
import {View, Text, ListView, TouchableHighlight} from 'react-native';

import styles from './../styles/';
import * as actions from './../actions/';
import NotesItem from './NotesItem'

var dataSource = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});

export var Notes = React.createClass({
  render() {
    var {notes, dispatch} = this.props;

    var dsNotes = dataSource.cloneWithRows(notes);

    console.log('NOTES RENDERING');

    return (
      <ListView dataSource={dsNotes} automaticallyAdjustContentInsets={false} renderRow={(note) => {
        return <NotesItem {...note} showNote={this.props.showNote}></NotesItem>
      }}></ListView>
    );
  }
});

export var mapStateToProps = (state) => {
  return {
    notes: state.notes
  };
};

export default connect(mapStateToProps)(Notes);
