import moment from 'moment';
import React from 'react';
import {connect} from 'react-redux';
import {View, Text, TextInput} from 'react-native';

import styles from './../styles/';
import * as actions from './../actions/';

// export var Note = React.createClass({
//   onChange(text) {
//     var {dispatch} = this.props;
//
//     dispatch(actions.updateNote(this.props.id, text))
//   },
//   render() {
//     var {id, createdAt, text} = this.props.note;
//
//     return (
//       <View style={styles.noteContainer}>
//         <Text>{id}</Text>
//         <TextInput style={styles.noteTextInput} onChangeText={this.onChange} multiline={true} placeholder="Untitled Note" value={text}/>
//       </View>
//     );
//   }
// });

export var Note = React.createClass({
  getInitialState() {
    return {
      text: this.props.note.text
    };
  },
  onChange(text) {
    var {dispatch} = this.props;

    this.setState({text})
    dispatch(actions.updateNote(this.props.id, text))
  },
  render() {
    var {id, createdAt} = this.props.note;
    var {text} = this.state;

    return (
      <View style={styles.noteContainer}>
        <Text>{moment.unix(createdAt).format('MMM, Do, YYYY @ h:mm a')}</Text>
        <TextInput style={styles.noteTextInput} onChangeText={this.onChange} multiline={true} placeholder="Untitled Note" value={text}/>
      </View>
    );
  }
});

export var stateToProps = (state, props) => {
  return {
    note: state.notes.filter((note) => note.id === props.id)[0]
  };
};

export default connect(stateToProps)(Note);
