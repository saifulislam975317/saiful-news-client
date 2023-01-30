import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../useTitle";
import NewsSummeryCard from "../../Shared/NewsSummeryCard/NewsSummeryCard";

const Category = () => {
  useTitle("category");
  const categoryNews = useLoaderData();

  return (
    <div>
      {categoryNews.map((news) => (
        <NewsSummeryCard key={news._id} news={news}></NewsSummeryCard>
      ))}
    </div>
  );
};

export default Category;
