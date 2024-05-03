'use client';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import SocialNav from './SocialNav';

function Footer() {
  return (
    <Card className="text-center bg-gradient-to-r from-gray-800 to-gray-950 text-white">
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <SocialNav/>
      </Card.Body>
      <Card.Footer className="text-white">Copyright by TailorGents</Card.Footer>
    </Card>
  );
}

export default Footer;