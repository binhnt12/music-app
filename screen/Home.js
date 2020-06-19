import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { CATEGORY } from '../static/tracks';
import { useCategoryState } from '../contexts/CategoryContext';
import { useModalState } from '../contexts/ModalContext';

const { width } = Dimensions.get('window');

const Item = ({ navigation, item }) => {
  const { handleSelectedCategoryId } = useCategoryState();
  const { handleShowModal } = useModalState();

  const handleSwitch = (id) => {
    handleSelectedCategoryId(id);
    handleShowModal(false);
    navigation.navigate('Playlist', { category: item.name });
  };

  return (
    <TouchableOpacity onPress={() => handleSwitch(item.id)}>
      <Image source={{ uri: item.picture }} style={styles.img} />
      <Text style={styles.textItem}>{item.name}</Text>
    </TouchableOpacity>
  );
};

const Home = ({ navigation }) => {
  const [widthState, setWidthState] = useState(width);

  const onLayout = (e) => {
    if (widthState !== e.nativeEvent.layout.width) {
      setWidthState(e.nativeEvent.layout.width);
    }
  };

  return (
    <ScrollView style={styles.container} onLayout={onLayout}>
      <Image
        source={{
          uri:
            'https://photo-zmp3.zadn.vn/banner/9/d/2/d/9d2dd92b4f457c8813e29779f22f679a.jpg',
        }}
        style={[styles.banner, { maxWidth: widthState - 16 }]}
      />
      <Text style={styles.textCategory}>Chủ đề</Text>
      <FlatList
        data={CATEGORY}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Item navigation={navigation} item={item} />}
        keyExtractor={(item) => item.id + ''}
      />
      <View style={styles.space} />
    </ScrollView>
  );
};

export default Home;

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
  banner: {
    height: 200,
    borderRadius: 8,
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
    fontWeight: 'bold',
  },
  space: {
    marginBottom: 20,
  },
});
