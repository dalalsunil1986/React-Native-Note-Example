import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scene: {
    flex: 1,
    paddingTop: 64
  },
  noteContainer: {
    flex: 1
  },
  noteItem: {
    backgroundColor: 'white',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    padding: 15
  },
  noteTextInput: {
    flex: 1,
    padding: 10,
    color: '#333',
    fontSize: 16,
  },
  noteTitle: {
    textAlign: 'center',
    color: '#999',
    fontSize: 12,
    marginTop: 20
  },
  title: {
    color: '#333',
    fontSize: 16,
    marginBottom: 5
  },
  subtitle: {
    color: '#999',
    fontSize: 12
  }
});

export default styles;
