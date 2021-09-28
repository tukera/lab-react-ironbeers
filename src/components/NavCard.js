import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const NavCard = ({ image, title, text, url }) => {
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>
            <Link exact to={url}>
              {title}
            </Link>
          </Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NavCard;
