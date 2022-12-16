import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    top: 2,
    justifyContent: 'center',
    marginBottom: Platform.OS === 'android' ? 2 : 0,
  },
});
