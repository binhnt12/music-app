import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Item from '../components/Item';

const TRACKS = [
  {
    id: 0,
    title: 'Cảm ơn vì đã nói câu từ chối',
    singer: 'Hakoota Dũng Hà, Ái Phương',
    picture:
      'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/covers/7/0/70bad3af7fbe20920bbea933ef17ac9e_1489818951.jpg',
    audioUrl:
      'http://vnso-zn-11-tf-mp3-s1-zmp3.zadn.vn/1376fcfe15bafce4a5ab/1621971869444679327?authen=exp=1591346236~acl=/1376fcfe15bafce4a5ab/*~hmac=0b830d3f27bf0e74206c4336ba96640c',
  },
  {
    id: 1,
    title: 'Không thể cùng nhau suốt kiếp',
    singer: 'Hoà Minzy, Mr Siro',
    picture:
      'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/1/7/8/6/17861cfa5213a52daec2c556101fb421.jpg',
    audioUrl:
      'http://vnso-zn-16-tf-mp3-s1-zmp3.zadn.vn/aab3d2bcc2fb2ba572ea/1104467447840469379?authen=exp=1591347150~acl=/aab3d2bcc2fb2ba572ea/*~hmac=c2fc350805bde603fd43169a3845dcd4',
  },
  {
    id: 2,
    title: 'Em không sai chúng ta sai',
    singer: 'Eric',
    picture:
      'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/7/4/0/d/740d5e0fd272d2421d441e9fd5c08fdd.jpg',
    audioUrl:
      'http://vnso-zn-15-tf-mp3-s1-zmp3.zadn.vn/fc22f878e83f0161582e/5932759875015511356?authen=exp=1591347313~acl=/fc22f878e83f0161582e/*~hmac=0033b89865423299fb29107b211cf7e3',
  },
];

const Playlist = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={TRACKS}
        renderItem={({ item }) => (
          <Item item={item} navigation={navigation} tracks={TRACKS} />
        )}
        keyExtractor={(item) => item.id + ''}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
});

export default Playlist;
