import { MovieDataFetcher } from "../../components/MovieData/MovieDataFetcher";

export const Popular = () => {
  const apiKey = "d2cb276ab0ca7b65595d1e9a2fd4ea84"; // Replace with your actual TMDB API key

  return (
    <div>
      <MovieDataFetcher apiEndpoint="popular" apiKey={apiKey} />
    </div>
  );
};
