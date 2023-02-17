import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { UseGetUpcomingAnime } from '../api/animeAllCall';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import SingleAnime from '../components/SingleAnime';
import Header from '../components/Header';
import { CommonActions } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const UpcomingView = ({ navigation }) => {
  const { data, isLoading } = UseGetUpcomingAnime();

  const PlaceHolderView = () => {
    return (
      <SkeletonPlaceholder
        highlightColor={'#ffdca8'}
        speed={1000}
        backgroundColor={'rgba(0,0,0,0.7)'}>
        <View style={styles.placeHolderTabContainer}></View>
      </SkeletonPlaceholder>
    );
  };
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
    navigation.navigate({
      name: 'DetailView',
      params: { anime: item },
    });
  };

  return (
    <>
      {isLoading ? (
        <View style={styles.placeHoldercontainer}>
          <Header isContainSearch={false} />
          <PlaceHolderView />
          <PlaceHolderView />
          <PlaceHolderView />
        </View>
      ) : (
        <View style={styles.container}>
          <Header isContainSearch={true} onPressMenu={() => onClickMenu()} />
          <FlatList
            data={data.data}
            numColumns={2}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      )}
    </>
  );
};

export default UpcomingView;

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
