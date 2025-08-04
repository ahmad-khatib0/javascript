import axios from "axios";

const KEY = "AIzaSyB52HKjugexWbb6sEaM9FVi9HvM6CUeRZw";

export default axios.create({
  baseURL: " https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video",
  },
});
