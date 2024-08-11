import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import terminal_block from '../../../assets/terminal_block.webp'

function ProductCard() {
  return (
    <Card style={{ minWidth: '8rem',maxWidth: '15rem' }}>
      <Card.Img variant="top" src={terminal_block}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default ProductCard;