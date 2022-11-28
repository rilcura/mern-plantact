import Carousel from 'react-bootstrap/Carousel';
import c1 from './images/c1.jpeg'
import c2 from './images/c2.jpeg'
import c3 from './images/c3.png'

console.log(c1)
console.log(c2)
console.log(c3)

function PreventionsCarousel() {
    return (
        <Carousel variant="light">
            <Carousel.Item>
                <img
                    className="d-block vh-100 w-100"
                    src={c1}
                    alt="First slide"
                />
                <Carousel.Caption className='bg-light bg-opacity-75 text-dark' >
                    <h1>Environmental Issues</h1>
                    <p>In order to safeguard the ecological systems that support all life, we put our attention on fundamental issues.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block vh-100 w-100"
                    src={c2}
                    alt="Second slide"
                />
                <Carousel.Caption className='bg-light bg-opacity-75 text-dark' >
                    <h1>Climate Change</h1>
                    <p>Sea ice loss, rapid sea level rise, and longer, more intense heat waves are examples of effects of global climate change that scientists previously anticipated would occur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block vh-100 w-100"
                    src={c3}
                    alt="Third slide"
                />
                <Carousel.Caption className='bg-light bg-opacity-75 text-dark' >
                    <h1>Deforestation</h1>
                    <p>A forest the size of 20 football fields is destroyed every minute. Only 10% of the planet's forests may exist by the year 2030.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel >
    );
}

export default PreventionsCarousel;
