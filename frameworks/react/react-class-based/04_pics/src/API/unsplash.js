import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID XuB-YNBeEZ9TdHHElyqYgZQFfsP8kGX9pgiX01Aepkc",
  },
});
