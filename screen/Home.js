import React from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { CATEGORY } from '../static/tracks';
import { useCategoryState } from '../contexts/CategoryContext';
import { useModalState } from '../contexts/ModalContext';

const { width } = Dimensions.get('window');

const Item = ({ navigation, item }) => {
  const { handleSelectedCategoryId } = useCategoryState();
  const { handleShowModal } = useModalState();

  const handleSwitch = (id) => {
    handleSelectedCategoryId(item.id);
    handleShowModal(false);
    navigation.navigate('Playlist');
  };

  return (
    <TouchableOpacity
      onPress={() => handleSwitch(item.id)}
      style={styles.imgAndText}>
      <Image source={{ uri: item.picture }} style={styles.img} />
      <Text style={styles.textItem}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri:
            'https://photo-zmp3.zadn.vn/banner/9/d/2/d/9d2dd92b4f457c8813e29779f22f679a.jpg',
        }}
        style={styles.banner}
      />
      <Text style={styles.textCategory}>Thể loại</Text>
      <FlatList
        data={CATEGORY}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Item navigation={navigation} item={item} />}
        keyExtractor={(item) => item.id + ''}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  textCategory: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  imgAndText: {
    // margin: 8,
  },
  banner: {
    width: width - 16,
    height: 200,
    borderRadius: 8,
    // margin: 8,
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 8,
    marginRight: 8,
  },
  textItem: {
    fontSize: 16,
    marginTop: 4,
  },
});
