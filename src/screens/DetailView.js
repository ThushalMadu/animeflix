import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import BackHeader from '../components/BackHeader';
const { width, height } = Dimensions.get('window');
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { getAsyncFavouriteLogs, setAsyncFavouriteLogs, updateAsyncFavouriteLogs } from '../asyncStore';

const DetailView = ({ navigation, route }) => {

  const [favourite, setFavourite] = useState(false)
  console.log("🚀 ~ file: DetailView.js:11 ~ DetailView ~ favourite", favourite)

  useEffect(() => {
    if (route.params?.anime) {
      favouriteContains(route.params?.anime.mal_id)
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.anime])


  const ImageView = ({ imageUrl }) => {
    return (
      <View style={styles.imageContainer}>
        <Image style={styles.customize_image} source={{ uri: imageUrl }} />
      </View>
    )
  }
  const TextView = ({ title, rate, score, year }) => {
    return (
      <View style={styles.textContainer}>
        <View style={styles.textContainerTitle}>
          <Text style={styles.textAnime}>{title}</Text>
        </View>
        <View style={styles.textContainerTextbtn}>
          <Text style={styles.textbtn}>{rate}</Text>
        </View>
        <View style={styles.textContainerTextscore}>
          <Text style={styles.textbtn}>{score}</Text>
        </View>
        <View style={styles.textContainerTextyear}>
          <Text style={styles.textbtn}>{year}</Text>
        </View>
        <TouchableOpacity onPress={() => onClickHeart()} style={styles.heartContainer}>
          <FontAwesome
            name={favourite ? 'heart' : "heart-o"}
            size={40}
            color={favourite ? "#FF0000" : "#B69769"}
          />
        </TouchableOpacity>
      </View>
    )
  }
  onPressBackMenu = () => {
    navigation.goBack()
  }
  favouriteContains = async (mal_id) => {
    const favouriteData = await getAsyncFavouriteLogs();
    console.log("🚀 ~ file: DetailView.js:59 ~ favouriteContains= ~ favouriteData ? favouriteData.some(obj => obj.mal_id === mal_id) : false", favouriteData ? favouriteData.some(obj => obj.mal_id === mal_id) : false)
    setFavourite(favouriteData !== null ? favouriteData.some(obj => obj.mal_id === mal_id) : false);
  }
  onClickHeart = async () => {
    if (favourite) {
      await updateAsyncFavouriteLogs(route.params?.anime.mal_id)
      setFavourite(false)
    } else {
      await setAsyncFavouriteLogs(route.params?.anime)
      setFavourite(true)
    }
  }

  return (
    <View style={styles.container}>
      <BackHeader onPressBack={() => onPressBackMenu()} />
      <ImageView imageUrl={route.params?.anime.images.jpg.image_url} />
      <TextView title={route.params?.anime.title} rate={route.params?.anime.rating} score={route.params?.anime.score} year={route.params?.anime.episodes} />
    </View>
  )
}

export default DetailView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "black",
  },
  imageContainer: {
    width: (width * 95 / 100),
    height: (height * 40 / 100),
  },
  textContainer: {
    width: (width * 95 / 100),
    height: (height * 40 / 100),
  },
  textContainerTitle: {
    width: (width * 95 / 100),
    height: (height * 10 / 100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainerTextbtn: {
    width: (width * 95 / 100),
    height: (height * 5 / 100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainerTextscore: {
    width: (width * 95 / 100),
    height: (height * 5 / 100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainerTextyear: {
    width: (width * 95 / 100),
    height: (height * 5 / 100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  heartContainer: {
    width: (width * 95 / 100),
    height: (height * 5 / 100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  customize_image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  textAnime: {
    fontSize: 24,
    fontWeight: "800",
    color: "white",
  },
  textbtn: {
    fontSize: 16,
    fontWeight: "400",
    color: "white",
  },
})