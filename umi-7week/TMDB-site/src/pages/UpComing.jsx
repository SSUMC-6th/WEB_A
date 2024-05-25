// eslint-disable-next-line no-unused-vars
import React from "react";
import TmdbData from "../components/TmdbData";

function UpcomingPage() {
  return (
    <>
      <TmdbData apiType="upcoming" currentPage="1" />
    </>
  );
}

export default UpcomingPage;
