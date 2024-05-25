// eslint-disable-next-line no-unused-vars
import React from "react";
import TmdbData from "../components/TmdbData";

function NowPlayingPage() {
  return (
    <>
      <TmdbData apiType="now_playing" currentPage="1" />
    </>
  );
}

export default NowPlayingPage;
