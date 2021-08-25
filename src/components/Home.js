import React from 'react';
import { Container, Row , Col, Button} from 'react-bootstrap';

export default function Home() {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="display-3 text-center">Home</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            suscipit nam perspiciatis adipisci architecto a doloribus accusamus
            deserunt dicta velit labore vitae eligendi ipsum, saepe odio
            provident laboriosam? Tempore, vero?
          </p>
        </Col>
        <Button>Read more</Button>
      </Row>
    </Container>
  );
}
