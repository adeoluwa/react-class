import React from 'react';
import { Spinner, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Post(props) {
  console.log(props);
  return (
    <Container>
      <h1 className="display-4 text-center">Post</h1>

      {props.isLoading ? (
        <div className="text-center">
          <Spinner animation="grow" />
        </div>
      ) : (
        <>
          <Row>
            {props.posts.slice(0, 30).map((Post) => {
              return (
                <Col md={3}>
                  <h4>
                    <Link to={`/posts/${Post.id}`}>
                      {Post.title.slice(0, 10)}
                    </Link>
                    ...
                  </h4>
                  <p>{Post.body.slice(0, 100)}...</p>
                </Col>
              );
            })}
          </Row>
          <h1 className="text-center mt-5">Data is Avaliable</h1>
        </>
      )}
    </Container>
  );
}
