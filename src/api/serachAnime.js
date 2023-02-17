import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const getSearchAnime = async (inputText) => {
  const response = await axios.get(`https://api.jikan.moe/v4/top/anime?q=${inputText}`);
  return response.data;
};

export const UseGetSearchAnime = (inputText) => {
  const { isLoading, data } = useQuery(['searchAnime'], getSearchAnime(inputText));
  console.log("🚀 ~ file: serachAnime.js:11 ~ UseGetSearchAnime ~ data", data)
  return { data, isLoading };
};