import { axiosInstance } from "./config";

// 轮播图数据
export const getBannerRequest = () => {
  return axiosInstance.get("/banner");
};

// 歌单列表
export const getRecommendListRequest = () => {
  return axiosInstance.get("/personalized");
};

// 热门歌手
export const getHotSingerListRequest = (count) => {
  return axiosInstance.get(`/top/artists?offset=${count}`);
};

// 热门歌手 字段搜索
export const getSingerListRequest = (category, alpha, count) => {
  return axiosInstance.get(
    `/artist/list?cat=${category}&initial=${alpha.toLowerCase()}&offset=${count}`
  );
};

export const getRankListRequest = () => {
  return axiosInstance.get(`/toplist/detail`);
};

// 歌单详情数据
export const getAlbumDetailRequest = (id) => {
  return axiosInstance.get(`/playlist/detail?id=${id}`);
};

export const getSingerInfoRequest = (id) => {
  return axiosInstance.get(`/artists?id=${id}`);
};

// 获取歌词
export const getLyricRequest = (id) => {
  return axiosInstance.get(`/lyric?id=${id}`);
};
