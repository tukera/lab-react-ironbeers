import React from 'react';
import NavCard from './NavCard';
import { Container, Row, Col } from 'react-bootstrap';
import beers from '../assets/beers.png';
import newBeers from '../assets/new-beer.png';
import randomBeers from '../assets/random-beer.png';

const HomePage = () => {
  const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, tenetur
  est? Itaque, ad dolore optio id a tempore veritatis impedit, at minus
  omnis repellat, pariatur dolorem voluptates laborum quam incidunt.`;

  return (
    <Container className="px-0 px-md-3">
      <Row>
        <Col xs={12} md>
          <NavCard image={beers} title="All Beers" text={text} url="/beers" />
        </Col>
        <Col xs={12} md>
          <NavCard
            image={newBeers}
            title="Random Beer"
            text={text}
            url="/random-beer"
          />
        </Col>
        <Col xs={12} md>
          <NavCard
            image={randomBeers}
            title="New Beer"
            text={text}
            url="/new-beer"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
