import moment from 'moment';
import React from 'react';
import {connect} from 'react-redux';
import {View, Text, ListView, TouchableHighlight} from 'react-native';

import styles from './../styles/';

var dataSource = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});

export var Notes = React.createClass({
  render() {
    var {notes} = this.props;
    var dsNotes = dataSource.cloneWithRows(notes);

    return (
      <View>
        <Text>Notes: {notes.length}</Text>
        <ListView dataSource={dsNotes} automaticallyAdjustContentInsets={false} renderRow={(note) => {
          var lines = note.text.split('\n');

          return (
            <TouchableHighlight onPress={() => this.props.showNote(note.id)}>
              <View>
                <Text>{lines[0].length > 0 ? lines[0] : 'Untitle note'}</Text>
                <Text>Created at: {moment.unix(note.createdAt).format('MMM, Do, YYYY @ h:mm a')}</Text>
              </View>
            </TouchableHighlight>
          )
        }}></ListView>
      </View>
    );
  }
});

export var stateToProps = (state) => {
  return {notes: state.notes};
};

export default connect(stateToProps)(Notes);
