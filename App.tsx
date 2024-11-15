import { ScrollView, StyleSheet } from 'react-native';
import FeedPost from './src/components/FeedPost/FeedPost';
import colors from './src/theme/colors';

const App = () => {
  return (
    <ScrollView style={styles.app}>
      <FeedPost />
      <FeedPost />
      <FeedPost />
      <FeedPost />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default App;
