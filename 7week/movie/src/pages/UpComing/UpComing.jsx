import { MovieDataFetcher } from "../../components/MovieData/MovieDataFetcher";

export const Upcoming = () => {
  const apiKey = "d2cb276ab0ca7b65595d1e9a2fd4ea84";

  return (
    <div>
      <MovieDataFetcher apiEndpoint="upcoming" apiKey={apiKey} />
    </div>
  );
};
