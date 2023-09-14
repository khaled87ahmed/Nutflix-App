import React from "react";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import NavComp from "../components/Navbar";
import { MovieCard } from "../components/MovieCard";

const Favorite = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <>
      <NavComp />
      <Container className="mt-5">
        <h1 style={{ color: "#fff" }} className="mb-4">
          Favorite Movies
        </h1>
        <Row md={3} xs={1} lg={4} className="g-4">
          {favorites?.map((movie) => (
            <Col key={movie.id}>
              <MovieCard movie={movie} />
            </Col>
          ))}
        </Row>
        {favorites ? "" : <h1>There is no favorites yet</h1>}
      </Container>
    </>
  );
};

export default Favorite;
