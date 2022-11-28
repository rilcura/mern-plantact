import Carousel from 'react-bootstrap/Carousel';
import c1 from './images/c1.jpg'
import c2 from './images/c2.png'
import c3 from './images/c3.png'

console.log(c1)
console.log(c2)
console.log(c3)

function DarkVariantExample() {
    return (
        <Carousel variant="light">
            <Carousel.Item>
                <img
                    className="d-block vh-100 w-100"
                    src={c1}
                    alt="First slide"
                />
                <Carousel.Caption className='bg-light bg-opacity-75 text-dark' >
                    <h1>Go green Be clean.</h1>
                    <p>Make our planet green, help us make our planet more sustainable than previous years. Be more cautious in your surroundings.   </p>
                </Carousel.Caption>

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block vh-100 w-100"
                    src={c2}
                    alt="Second slide"
                />
                <Carousel.Caption className='bg-light bg-opacity-75 text-dark' >
                    <h1>Go green Be clean.</h1>
                    <p>Make our planet green, help us make our planet more sustainable than previous years. Be more cautious in your surroundings.   </p>
                </Carousel.Caption>

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block vh-100 w-100"
                    src={c3}
                    alt="Third slide"
                />
                <Carousel.Caption className='bg-light bg-opacity-75 text-dark' >
                    <h1>Go green Be clean.</h1>
                    <p>Make our planet green, help us make our planet more sustainable than previous years. Be more cautious in your surroundings.   </p>
                </Carousel.Caption>

            </Carousel.Item>
        </Carousel >
    );
}

export default DarkVariantExample;
