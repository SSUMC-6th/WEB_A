// eslint-disable-next-line no-unused-vars
import React from "react";
import TmdbData from "../components/TmdbData";

function PopularPage() {
  return (
    <>
      <TmdbData apiType="popular" />
    </>
  );
}

export default PopularPage;
