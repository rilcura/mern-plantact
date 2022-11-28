import Card from 'react-bootstrap/Card';

function Product(props) {
  const { product } = props;

  return (
    <>
      <div className='mb-1 text-white'>Spacer</div>
      <Card className='border-shadow' >
        <img src={product.image} className="card-img-top" alt={product.name} />
        <Card.Body>
          <Card.Title><strong>{product.name}</strong></Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Subtitle>{product.location}</Card.Subtitle>
          <Card.Subtitle className='text-muted pt-2'>{product.date}</Card.Subtitle>
        </Card.Body>
      </Card>
    </>
  );
}
export default Product;
