const searchUnsplash = async (query) => {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
      query
    )}&per_page=1&orientation=landscape`,
    {
      headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch image from Unsplash");
  }

  const data = await response.json();

  if (!data.results.length) {
    return null;
  }

  const photo = data.results[0];

  return {
    image: photo.urls.regular,
    photographer: photo.user.name,
    photographerUrl: photo.user.links.html,
    unsplashUrl: photo.links.html,
  };
};

export default searchUnsplash;