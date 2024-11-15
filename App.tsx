import { StyleSheet, Text, View } from 'react-native';
import colors from './src/theme/colors';
import { size, weight } from './src/theme/fonts';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Hello World</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    color: colors.black,
    fontSize: size.lg,
    fontWeight: weight.bold,
  },
});

export default App;
