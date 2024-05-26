import { MovieDataFetcher } from "../../components/MovieData/MovieDataFetcher";

export const TopRated = () => {
  const apiKey = "d2cb276ab0ca7b65595d1e9a2fd4ea84";

  return (
    <div>
      <MovieDataFetcher apiEndpoint="top_rated" apiKey={apiKey} />
    </div>
  );
};
