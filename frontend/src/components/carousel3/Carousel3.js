import Carousel from 'react-bootstrap/Carousel';
import c1 from './images/c1.png'
import c2 from './images/c2.png'
import c3 from './images/c3.png'

console.log(c1)
console.log(c2)
console.log(c3)

function Carousel3() {
    return (
        <Carousel variant="light">
            <Carousel.Item>
                <img
                    className="d-block vh-100 w-100"
                    src={c1}
                    alt="First slide"
                />
                <Carousel.Caption className='bg-light bg-opacity-75 text-dark p-5 rounded' >
                    <h2 className=''>DENR SEIZES ILLEGALLY CUT LUMBER IN NUEVA ECIJA
                    </h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block vh-100 w-100"
                    src={c2}
                    alt="Second slide"
                />
                <Carousel.Caption className='bg-light bg-opacity-75 text-dark p-5 rounded' >
                    <h2 className=''>DENR UNDERSCORES THE ROLE OF CHILDREN IN PROTECTING THE OCEAN
                    </h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block vh-100 w-100"
                    src={c3}
                    alt="Third slide"
                />
                <Carousel.Caption className='bg-light bg-opacity-75 text-dark p-5 rounded' >
                    <h2 className=''>"SCUBASUREROS" SCOUR ZAMBALES' SHORE AND SEA FOR LITTER
                    </h2>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel >
    );
}

export default Carousel3;
