import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

const Beers = ({ beers, fetching }) => {
  return (
    <div>
      <h2 className="text-center">List of Beers</h2>
      {fetching && <p>Loading ...</p>}
      <ListGroup>
        {beers.map((beer) => {
          return (
            <ListGroup.Item
              key={beer._id}
              className="d-flex justify-content-center"
            >
              <Row className="align-items-center">
                <Col xs={2}>
                  <img
                    src={beer.image_url}
                    alt={beer.name}
                    className="img-fluid"
                  />
                </Col>
                <Col className="h-100">
                  <h3 className="mb-2">{beer.name}</h3>
                  <p className="mb-0">{beer.tagline}</p>
                  <p className="mb-0">{beer.contributed_by}</p>
                </Col>
              </Row>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default Beers;
