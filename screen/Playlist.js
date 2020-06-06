import React from 'react';
import { FlatList, StyleSheet, View, ImageBackground } from 'react-native';
import Modal from 'react-native-modal';

import Item from '../components/Item';
import Header from '../components/Header';
import Player from '../components/Player';

import { useModalState } from '../contexts/ModalContext';

const TRACKS = [
  {
    id: 0,
    title: 'Bạc phận',
    singer: 'Jack, K-ICM',
    picture:
      'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/4/2/5/3/425334e6f252b8c34d74d16177a5eb9d.jpg',
    audioUrl:
      'https://feeds.soundcloud.com/stream/835204426-user510635516-b-c-ph-n.mp3',
  },
  {
    id: 1,
    title: '24h',
    singer: 'LyLy, Magazine',
    picture:
      'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/c/5/4/d/c54df0e46c902b5b43602c57c2b77df4.jpg',
    audioUrl:
      'https://feeds.soundcloud.com/stream/835212994-user510635516-24h.mp3',
  },
  {
    id: 2,
    title: 'Không sao đâu, em đây mà',
    singer: 'Sunny Hạ Linh',
    picture:
      'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/4/8/f/f/48ffdb72c21e5865fa0f2f1f269f0e16.jpg',
    audioUrl:
      'https://feeds.soundcloud.com/stream/835204324-user510635516-kh-ng-sao-m-em-y-r-i.mp3',
  },
  {
    id: 3,
    title: 'Cảm ơn vì đã nói câu từ chối',
    singer: 'Hakoota Dũng Hà, Ái Phương',
    picture:
      'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/covers/7/0/70bad3af7fbe20920bbea933ef17ac9e_1489818951.jpg',
    audioUrl:
      'https://feeds.soundcloud.com/stream/835204402-user510635516-c-m-n-v-n-i-c-u-t-ch-i.mp3',
  },
  {
    id: 4,
    title: 'Anh đang nơi đâu',
    singer: 'Miu Lê',
    picture:
      'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/f/f/ffaa21f0110ad661fe0741b5acb2bf10_1461581144.jpg',
    audioUrl:
      'https://feeds.soundcloud.com/stream/835196092-user510635516-anh-dang-noi-dau.mp3',
  },
  {
    id: 5,
    title: 'Thằng điên',
    singer: 'JustaTeeTee, Phương Ly',
    picture:
      'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/9/d/5/c/9d5c56a277a06a48ec7956a4fd17e4c1.jpg',
    audioUrl:
      'https://feeds.soundcloud.com/stream/835213687-user510635516-thang-dien.mp3',
  },
  {
    id: 6,
    title: 'Anh Mơ',
    singer: 'Anh Khang',
    picture:
      'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/covers/b/e/be470579ff1b903cbe28dcf7fdd1b1ce_1322733762.jpg',
    audioUrl:
      'https://feeds.soundcloud.com/stream/835204435-user510635516-anh-mo.mp3',
  },
  {
    id: 7,
    title: 'Không thể cùng nhau suốt kiếp',
    singer: 'Hoà Minzy, Mr Siro',
    picture:
      'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/1/7/8/6/17861cfa5213a52daec2c556101fb421.jpg',
    audioUrl:
      'https://feeds.soundcloud.com/stream/835204300-user510635516-kh-ng-th-c-ng-nhau-su-t-ki-p.mp3',
  },
  {
    id: 8,
    title: 'Em không sai chúng ta sai',
    singer: 'Erik',
    picture:
      'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/7/4/0/d/740d5e0fd272d2421d441e9fd5c08fdd.jpg',
    audioUrl:
      'https://feeds.soundcloud.com/stream/835204384-user510635516-em-khong-sai-chung-ta-sai.mp3',
  },
];

const Playlist = ({ navigation }) => {
  const { isModalVisible, trackId } = useModalState();

  return (
    <View style={styles.container}>
      <Header text="Bài hát" noArrow backgroundColor="#000051" />
      <ImageBackground
        source={require('../img/background.jpg')}
        style={styles.backgroundOne}>
        <ImageBackground style={styles.backgroundTwo}>
          <View style={styles.flatlist}>
            <FlatList
              data={TRACKS}
              renderItem={({ item }) => <Item item={item} tracks={TRACKS} />}
              keyExtractor={(item) => item.id + ''}
            />
          </View>
        </ImageBackground>
      </ImageBackground>
      <Modal isVisible={isModalVisible} style={styles.modal}>
        <Player tracks={TRACKS} trackId={trackId} />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatlist: {
    marginTop: 16,
  },
  backgroundOne: {
    flex: 1,
    resizeMode: 'cover',
  },
  backgroundTwo: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 81, 0.8)',
  },
  modal: {
    margin: 0,
  },
});

export default Playlist;
