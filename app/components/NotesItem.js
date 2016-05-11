import Swipeout from 'react-native-swipeout';
import moment from 'moment';
import React from 'react';
import {connect} from 'react-redux';
import {View, Text, ListView, TouchableHighlight} from 'react-native';

import styles from './../styles/';
import * as actions from './../actions/';

export var NotesItem = React.createClass({
  getSwipeButtons() {
    var {id, dispatch} = this.props;

    return [
      {
        text: 'Delete',
        backgroundColor: 'red',
        color: 'white',
        onPress: () => {
          dispatch(actions.deleteNote(id));
        }
      }
    ];
  },
  render() {
    var {id, text, createdAt, dispatch} = this.props;
    var lines = text.split('\n');
    var formattedDate = moment.unix(createdAt).format('MMM, Do, YYYY @ h:mm a');

    return (
      <Swipeout
        rowID={id}
        autoClose={true}
        right={this.getSwipeButtons()}
        onOpen={(sectionID, rowID) => {
          // console.log('***** open', sectionID, rowID);
        }}>
        <TouchableHighlight style={styles.noteItem} onPress={() => this.props.showNote(id)}>
          <View>
            <Text style={styles.title}>{lines[0].length > 0 ? lines[0] : 'Untitle note'}</Text>
            <Text style={styles.subtitle}>{formattedDate}</Text>
          </View>
        </TouchableHighlight>
      </Swipeout>
    );
  }
});

// export var stateToProps = (state, props) => {
//   return {
//     note: state.notes.filter((note) => note.id === props.id)[0]
//   };
// };

export default connect()(NotesItem);
