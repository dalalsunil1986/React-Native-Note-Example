import moment from 'moment';
import React from 'react';
import {connect} from 'react-redux';
import {View, Text, TextInput} from 'react-native';

import styles from './../styles/';
import * as actions from './../actions/';

export var Note = React.createClass({
  onChange(text) {
    var {dispatch} = this.props;

    var id = this.props.notes.filter((note) => note.id === this.props.id)[0].id

    dispatch(actions.updateNote(id, text))
  },
  render() {
    var {id, createdAt, text} = this.props.notes.filter((note) => note.id === this.props.id)[0]
    var formattedDate = moment.unix(createdAt).format('MMM, Do, YYYY @ h:mm a');
    console.log('rendering text', text);
    return (
      <View style={styles.noteContainer}>
        <Text style={styles.noteTitle}>{formattedDate}</Text>
        <TextInput style={styles.noteTextInput} onChangeText={this.onChange} multiline={true} placeholder="Untitled Note" value={text}/>
      </View>
    );
  }
});

export var stateToProps = (state, props) => {
  return {
    notes: state.notes
  };
};

export default connect(stateToProps)(Note);
