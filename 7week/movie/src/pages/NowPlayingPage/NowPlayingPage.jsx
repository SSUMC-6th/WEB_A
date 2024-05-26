import { MovieDataFetcher } from "../../components/MovieData/MovieDataFetcher";

export const NowPlaying = () => {
  const apiKey = "d2cb276ab0ca7b65595d1e9a2fd4ea84";

  return (
    <div>
      <MovieDataFetcher apiEndpoint="now_playing" apiKey={apiKey} />
      <div>NowPlaying</div>
    </div>
  );
};
