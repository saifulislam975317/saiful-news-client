import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../../useTitle";

const News = () => {
  useTitle("news");
  const news = useLoaderData();
  const { category_id, details, image_url, title } = news;

  return (
    <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{details}</Card.Text>
        <Link to={`/category/${category_id}`}>
          <Button variant="primary">Go All news Category</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default News;
