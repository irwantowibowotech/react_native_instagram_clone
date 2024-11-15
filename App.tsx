import { Image, StyleSheet, Text, View } from 'react-native';
import colors from './src/theme/colors';
import { weight } from './src/theme/fonts';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import IonIcons from 'react-native-vector-icons/Ionicons';

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={styles.post}>
        {/* Header */}
        <View style={styles.header}>
          <Image source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
          }} style={styles.userAvatar} />
          <Text style={styles.userUsername}>irwanto1992</Text>
          <Entypo name="dots-three-horizontal" size={16} style={styles.threeDots} />
        </View>

        {/* Content */}
        <Image source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
        }} style={styles.image} />

        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.iconContainer}>
            <AntDesign
              name={'hearto'}
              size={24}
              style={styles.icon}
              color={colors.black}
            />
            <IonIcons
              name="chatbubble-outline"
              size={24}
              style={styles.icon}
              color={colors.black}
            />
            <Feather
              name="send"
              size={24}
              style={styles.icon}
              color={colors.black}
            />

            <Feather name="bookmark" size={24} style={{ marginLeft: 'auto' }} />
          </View>

          {/* Likes */}
          <Text style={styles.text}>Liked by {' '}
            <Text style={styles.bold}>irwanto92</Text>{' '}
            and <Text style={styles.bold}>100 others</Text>
          </Text>

          {/* Post Description */}
          <Text style={styles.text}>
            <Text>irwanto1992</Text> {' '}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat veritatis
            obcaecati quasi culpa delectus enim deleniti eos, minima quae sequi deserunt,
            in perspiciatis, quas quos maiores iste modi facere dolores?
          </Text>

          {/* Comments */}
          <Text>View all 16 comments</Text>
          <View style={styles.comment}>
            <Text style={styles.commentText}>
              <Text>gk12</Text> {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat veritatis
              obcaecati quasi culpa delectus enim deleniti eos
            </Text>
            <AntDesign
              name={'hearto'}
              style={styles.icon}
              color={colors.black}
            />
          </View>

          {/* Posted date */}
          <Text>19 December 2021</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    // backgroundColor: colors.white,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  userAvatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userUsername: {
    fontWeight: weight.bold,
    color: colors.black,
  },
  threeDots: {
    marginLeft: 'auto',
  },
  footer: {
    padding: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  icon: {
    marginHorizontal: 5,
  },
  text: {
    color: colors.black,
    lineHeight: 18,
  },
  bold: {
    fontWeight: weight.bold,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentText: {
    color: colors.black,
    flex: 1,
    lineHeight: 18,
  },
});

export default App;
