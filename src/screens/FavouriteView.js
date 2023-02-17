import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { UseGetAllAnime } from '../api/animeAllCall';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import SingleAnime from '../components/SingleAnime';
import Header from '../components/Header';
import { getAsyncFavouriteLogs } from '../asyncStore';

const { width, height } = Dimensions.get('window');

const FavouriteView = ({ navigation }) => {

  const [favourite, setFavourite] = useState([]);

  useEffect(() => {
    favouriteContains()
  }, [])

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => onClickAnime(item)}>
        <SingleAnime anime={item} />
      </TouchableOpacity>
    );
  };
  onClickMenu = () => {
    navigation.toggleDrawer();
  };
  onClickAnime = item => {
    // console.log("🚀 ~ file: FavouriteView.js:38 ~ FavouriteView ~ item", item)
    // navigation.navigate({
    //   name: 'DetailView',
    //   params: {anime: item},
    // });
  };

  favouriteContains = async () => {
    const favouriteData = await getAsyncFavouriteLogs();
    setFavourite(favouriteData)
  }

  return (
    <View style={styles.container}>
      <Header isContainSearch={false} onPressMenu={() => onClickMenu()} />
      <FlatList
        data={favourite}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default FavouriteView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  placeHoldercontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  placeHolderTabContainer: {
    width: (width * 90) / 100,
    height: (height * 25) / 100,
    justifyContent: 'center',
    margin: (width * 5) / 100,
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
});
