import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const allAnimeUrl = 'https://api.jikan.moe/v4/anime';
const getAireAnime = async () => {
  const response = await axios.get(`${allAnimeUrl}?status=airing`);
  return response.data;
};

export const UseGetAllAnime = () => {
  const { isLoading, data } = useQuery(['allAnimeAire'], getAireAnime);
  return { data, isLoading };
};

const getCompleteAnime = async () => {
  const response = await axios.get(`${allAnimeUrl}?status=complete`);
  return response.data;
};
export const UseGetCompleteAnime = () => {
  const { isLoading, data } = useQuery(['allAnimeComplete'], getCompleteAnime);
  return { data, isLoading };
};

const getUpcomingAnime = async () => {
  const response = await axios.get(`${allAnimeUrl}?status=upcoming`);
  return response.data;
};
export const UseGetUpcomingAnime = () => {
  const { isLoading, data } = useQuery(['allAnimeupcoming'], getUpcomingAnime);
  return { data, isLoading };
};