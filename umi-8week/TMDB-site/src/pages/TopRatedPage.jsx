// eslint-disable-next-line no-unused-vars
import React from "react";
import TmdbData from "../components/TmdbData";

function TopRatedPage() {
  return (
    <>
      <TmdbData apiType="top_rated" currentPage="1" />
    </>
  );
}

export default TopRatedPage;
