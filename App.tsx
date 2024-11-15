import { StyleSheet, Text, View } from 'react-native';
import colors from './src/theme/colors';
import { size, weight } from './src/theme/fonts';
import Icons from 'react-native-vector-icons/AntDesign';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>
        Hello World
        <Icons name="stepforward" size={20} color={colors.black} />
      </Text>
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
