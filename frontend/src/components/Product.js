import Card from 'react-bootstrap/Card';

function Product(props) {
  const { product } = props;

  return (
    <div>
      <Card className='border-shadow mt-4 w-100 h-100'>
        <img src={product.image} className="card-img-top" alt={product.name} />
        <Card.Body>
          <Card.Title><strong>{product.name}</strong></Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text><a href={product.videoLink} target="_blank" rel="noreferrer">Video Link</a></Card.Text>
          <Card.Subtitle>{product.location}</Card.Subtitle>
          <Card.Subtitle className='text-muted pt-2'>{product.date}</Card.Subtitle>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Product;
