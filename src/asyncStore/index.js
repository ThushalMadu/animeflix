import AsyncStorage from '@react-native-async-storage/async-storage';


export const setAsyncFavouriteLogs = async (payload) => {
    try {
        let favouriteData = await AsyncStorage.getItem("favouriteData");
        let favouriteDataArry = [];
        if (favouriteData !== null) {
            favouriteDataArry = JSON.parse(favouriteData);
        } else {
            favouriteDataArry = [];
        }
        favouriteDataArry.push(payload);
        console.log("🚀 ~ file: index.js:14 ~ setAsyncFavouriteLogs ~ favouriteDataArry", favouriteDataArry)
        await AsyncStorage.setItem("favouriteData", JSON.stringify(favouriteDataArry));
    } catch (error) {
        console.log("🚀 ~ file: ~ error", error)
    }
}
export const getAsyncFavouriteLogs = async () => {
    try {
        const retrievedItem = await AsyncStorage.getItem("favouriteData");
        const item = JSON.parse(retrievedItem);
        console.log("🚀 ~ file: index.js:23 ~ getAsyncFavouriteLogs ~ item", item)
        return item;
    } catch (error) {
        console.log("🚀 ~ file: ~ error", error)
    }
}
export const updateAsyncFavouriteLogs = async (mal_id) => {
    try {
    const favouriteData = await AsyncStorage.getItem('favouriteData');

    const parsedfavouriteData = favouriteData ? JSON.parse(favouriteData) : [];

    const index = parsedfavouriteData.findIndex(obj => obj.mal_id === mal_id);

    if (index === -1) {
      return parsedfavouriteData;
    }

    const newArr = [
      ...parsedfavouriteData.slice(0, index),
      ...parsedfavouriteData.slice(index + 1),
    ];
    console.log("🚀 ~ file: index.js:46 ~ updateAsyncFavouriteLogs ~ newArr", newArr)

    await AsyncStorage.setItem('favouriteData', JSON.stringify(newArr));

    } catch (error) {
        console.log("🚀 ~ file: ~ error", error)
    }
}


