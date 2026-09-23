import axios from "axios";

const searchUnsplash = async (query) => {
  const response = await axios.get(
    "https://api.unsplash.com/search/photos",
    {
      params: {
        query,
        per_page: 1,
        orientation: "landscape",
      },
      headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
        "Accept-Version": "v1",
      },
    }
  );

  const photo = response.data.results?.[0];

  if (!photo) {
    return null;
  }

  return {
    image: photo.urls.regular,
    photographer: photo.user.name,
    photographerUsername: photo.user.username,
    photographerUrl: photo.user.links.html,
    unsplashUrl: photo.links.html,
  };
};

export default searchUnsplash;