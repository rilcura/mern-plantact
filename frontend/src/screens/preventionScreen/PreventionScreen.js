import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Helmet } from 'react-helmet-async';
import preventions1 from '../preventionScreen/images/preventions1.png'
import preventions2 from '../preventionScreen/images/preventions2.png'
import preventions3 from '../preventionScreen/images/preventions3.png'
import preventions4 from '../preventionScreen/images/preventions4.png'
import preventions5 from '../preventionScreen/images/preventions5.png'
import preventions6 from '../preventionScreen/images/preventions6.png'
import preventions7 from '../preventionScreen/images/preventions7.png'
import preventions8 from '../preventionScreen/images/preventions8.png'
import preventions9 from '../preventionScreen/images/preventions9.png'
import preventions10 from '../preventionScreen/images/preventions10.png'
import preventions11 from '../preventionScreen/images/preventions11.png'
import preventions12 from '../preventionScreen/images/preventions12.png'

import './preventions.css'
import Button from 'react-bootstrap/esm/Button';
import FooterGlobal from '../../components/footer/footer';
import PreventionsCarousel from '../../components/carousel2/Carousel_Prevention';
import ScrollButton from '../../components/ScrollButton';
import SupportEngine from '../../components/SupportChat/SupportEngine';
import YoutubeEmbed from '../../components/YoutubeEmbed';

console.log(preventions1)
console.log(preventions2)
console.log(preventions3)
console.log(preventions4)
console.log(preventions5)
console.log(preventions6)
console.log(preventions7)
console.log(preventions8)
console.log(preventions9)
console.log(preventions10)
console.log(preventions11)
console.log(preventions12)

function PreventionScreen() {

    return (
        <>
            <Helmet>
                <title>Preventions</title>
            </Helmet>
            <PreventionsCarousel />
            <Container fluid className='py-5'>
                <Row className='d-flex align-items-center justify-content-center g-3'>
                    <Col lg={6}>
                        <h3 className='roboto-condensed-b' style={{
                            fontSize: '40px'
                        }}>Connecting With Nature</h3>
                        <div style={{
                            fontSize: '20px',
                            lineHeigt: '23px',

                        }}
                            className='pt-3'>
                            <p>
                                Getting in touch with nature helps us appreciate our surroundings more. We are spiritually nourished by marveling at the sky, the sun, the stars, the vegetation, and the animals.
                            </p>
                            <p>
                                Recognize the vulnerability of our environment and the significance of protecting it. One simple method to contribute to the environmental solution and provide our children a better future is by promoting environmental awareness.
                            </p>
                        </div>
                    </Col>
                    <Col xs={5} lg={4} className>
                        <img
                            className='w-100'
                            src={preventions1}
                            alt="DENR's greening program vital to climate change mitigation"
                        />
                    </Col>
                </Row>
            </Container>
            {/* Recent Projects Section */}
            <Container className='text-center'>
                <h3 className='roboto-condensed-b'>RECENT PROJECTS/CAMPAIGNS</h3>
                <Row>
                    <Col xs={12} md={6} lg={4} className='keynote '>
                        <img
                            className='w-100'
                            src={preventions6}
                            alt=""
                        />
                        <div className='keynote-desc d-flex flex-column align-items-center justify-content-center'>
                            <p className='keynote-bio'>DENR, partners plant trees to boost rehab, conservation efforts of C. Luzon forestlands
                            </p>
                            <a href='https://r3.denr.gov.ph/index.php/news-events/press-releases/1417-denr-partners-plant-trees-to-boost-rehab-conservation-efforts-of-c-luzon-forestlands?highlight=WyJwYXJ0bmVycyIsInBhcnRuZXJzJyIsInBsYW50IiwicGxhbnQncyIsInRyZWVzIiwidG8iLCJib29zdCIsInJlaGFiIiwiY29uc2VydmF0aW9uIiwiZWZmb3J0cyIsIm9mIiwiYyIsImx1em9uIiwibHV6b24ncyIsImZvcmVzdGxhbmRzIiwicGFydG5lcnMgcGxhbnQiLCJwYXJ0bmVycyBwbGFudCB0cmVlcyIsInBsYW50IHRyZWVzIiwicGxhbnQgdHJlZXMgdG8iLCJ0cmVlcyB0byIsInRyZWVzIHRvIGJvb3N0IiwidG8gYm9vc3QiLCJ0byBib29zdCByZWhhYiIsImJvb3N0IHJlaGFiIiwiYm9vc3QgcmVoYWIgY29uc2VydmF0aW9uIiwicmVoYWIgY29uc2VydmF0aW9uIiwicmVoYWIgY29uc2VydmF0aW9uIGVmZm9ydHMiLCJjb25zZXJ2YXRpb24gZWZmb3J0cyIsImNvbnNlcnZhdGlvbiBlZmZvcnRzIG9mIiwiZWZmb3J0cyBvZiIsImVmZm9ydHMgb2YgYyIsIm9mIGMiLCJvZiBjIGx1em9uIiwiYyBsdXpvbiIsImMgbHV6b24gZm9yZXN0bGFuZHMiLCJsdXpvbiBmb3Jlc3RsYW5kcyJd' target="_blank" rel="noreferrer" className='text-reset text-decoration-none'>
                                <Button variant='success'>READ MORE</Button>
                            </a>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={4} className='keynote'>
                        <img
                            className='w-100 h-100'
                            src={preventions3}
                            alt=""
                        />
                        <div className='keynote-desc d-flex flex-column align-items-center justify-content-center'>
                            <p className='keynote-bio'>DENR, partners hold massive coastal cleanup drive

                            </p>
                            <a href='https://r3.denr.gov.ph/index.php/news-events/press-releases/1430-denr-partners-hold-massive-coastal-cleanup-drive?highlight=WyJwYXJ0bmVycyIsInBhcnRuZXJzJyIsImhvbGQiLCJtYXNzaXZlIiwiY29hc3RhbCIsImNsZWFudXAiLCJkcml2ZSIsInBhcnRuZXJzIGhvbGQiLCJwYXJ0bmVycyBob2xkIG1hc3NpdmUiLCJob2xkIG1hc3NpdmUiLCJob2xkIG1hc3NpdmUgY29hc3RhbCIsIm1hc3NpdmUgY29hc3RhbCIsIm1hc3NpdmUgY29hc3RhbCBjbGVhbnVwIiwiY29hc3RhbCBjbGVhbnVwIiwiY29hc3RhbCBjbGVhbnVwIGRyaXZlIiwiY2xlYW51cCBkcml2ZSJd' target="_blank" rel="noreferrer" className='text-reset d-flex align-items-center justify-content-center text-decoration-none'>
                                <Button variant='success'>READ MORE</Button>
                            </a>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={4} className='keynote'>
                        <img
                            className='w-100 h-100'
                            src={preventions4}
                            alt=""
                        />
                        <div className='keynote-desc d-flex flex-column align-items-center justify-content-center'>
                            <p className='keynote-bio'>DENR plants bamboos in Bamban River to boost reforestation, Manila Bay rehab efforts

                            </p>
                            <a href='https://r3.denr.gov.ph/index.php/news-events/press-releases/1381-denr-plants-3-600-bamboo-propagules-to-boost-manila-bay-rehab-reforestation-efforts?highlight=WyJwbGFudCIsInBsYW50J3MiLCJiYW1ib29zIl0=' target="_blank" rel="noreferrer" className='text-reset d-flex align-items-center justify-content-center text-decoration-none'>
                                <Button variant='success'>READ MORE</Button>
                            </a>
                        </div>
                    </Col>
                </Row>
                {/* Row 2 */}
                <Row className='d-flex align-items-center justify-content-center'>
                    <Col xs={12} md={6} lg={4} className='keynote'>
                        <img
                            className='w-100 h-100'
                            src={preventions5}
                            alt=""
                        />
                        <div className='keynote-desc d-flex flex-column align-items-center justify-content-center'>
                            <p className='keynote-bio'>STATE WORKERS, PARTNERS PLANT TREES TO CONSERVE C. LUZON FORESTLANDS

                            </p>
                            <a href='https://r3.denr.gov.ph/index.php/news-events/photo-releases/1429-state-workers-partners-plant-trees-to-conserve-c-luzon-forestlands?highlight=WyJzdGF0ZSIsInN0YXRlJ3MiLCJ3b3JrZXJzIiwic3RhdGUgd29ya2VycyJd' target="_blank" rel="noreferrer" className='text-reset d-flex align-items-center justify-content-center text-decoration-none'>
                                <Button variant='success'>READ MORE</Button>
                            </a>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={4} className='keynote'>
                        <img
                            className='w-100'
                            src={preventions2}
                            alt=""
                        />
                        <div className='keynote-desc d-flex flex-column align-items-center justify-content-center'>
                            <p className='keynote-bio'>Youth leaders, IPs convene towards climate action
                            </p>
                            <a href='https://r3.denr.gov.ph/index.php/news-events/press-releases/1425-youth-leaders-ips-convene-towards-climate-action?highlight=WyJ5b3V0aCIsImxlYWRlcnMiLCJsZWFkZXJzJyIsInlvdXRoIGxlYWRlcnMiXQ==' target="_blank" rel="noreferrer" className='text-reset d-flex align-items-center justify-content-center text-decoration-none'>
                                <Button variant='success'>READ MORE</Button>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* WHAT CAN YOU SECTION */}
            <Container className='mt-4 text-center'>
                <h3 className='bg-light roboto-condensed-b'>WHAT CAN "YOU" DO??</h3>
                <div className='d-flex align-items-center justify-content-center'>
                    <Row className='g-5 mt-2'>

                        <Col lg={4}>
                            <h4>WASTE MANAGEMENT</h4>
                            <img
                                className='w-100'
                                src={preventions7}
                                alt=""
                            />
                        </Col>
                        <Col lg={4}>
                            <h4>PLANT TREES</h4>
                            <img
                                className='w-100'
                                src={preventions8}
                                alt=""
                            />
                        </Col>
                        <Col lg={4}>
                            <h4>EDUCATION</h4>
                            <img
                                className='w-100'
                                src={preventions9}
                                alt=""
                            />
                        </Col>
                        <Col lg={4}>
                            <h4>SAVE WATER</h4>
                            <img
                                className='w-50'
                                src={preventions10}
                                alt=""
                            />
                        </Col>
                        <Col lg={4}>
                            <h4>CONSERVE ENERGY</h4>
                            <img
                                className='w-50'
                                src={preventions11}
                                alt=""
                            />
                        </Col>
                        <Col lg={4}>
                            <h4>SUPPORT BIODIVERSITY</h4>
                            <img
                                className='w-100'
                                src={preventions12}
                                alt=""
                            />
                        </Col>

                    </Row>
                </div>

            </Container>
            <Container className='text-center'>
                <h2 className='pt-5 roboto-condensed-b'>ENVIRONMENTAL PREVENTION
                </h2><h2 className='roboto-condensed-b'>&</h2><h2 className='roboto-condensed-b'> SAFETY VIDEOS</h2>

                <YoutubeEmbed embedId='https://www.youtube.com/watch?v=Lf2WZe0b9GE' />
                <YoutubeEmbed embedId='https://www.youtube.com/watch?v=IIxo3XuYRLQ&list=PLiNxrElVnlzDkqZsnrpP-FXJfyC-SzgNw' />
                <YoutubeEmbed embedId='https://www.youtube.com/watch?v=uFQhHHTvP8Y' />
                <YoutubeEmbed embedId='https://www.youtube.com/watch?v=7XqJIsBqMUk' />
                <YoutubeEmbed embedId='https://www.youtube.com/watch?v=O-CDaVRHR1Q&list=PLiNxrElVnlzDkqZsnrpP-FXJfyC-SzgNw&index=2' />
                <YoutubeEmbed embedId='https://www.youtube.com/watch?v=ORQ1jlL0a3E&list=PLiNxrElVnlzDkqZsnrpP-FXJfyC-SzgNw&index=8' />

            </Container>
            {/* Divider */}
            <Container className='text-white py-2'>Divider</Container>
            {/* Divider end */}
            <ScrollButton />
            <FooterGlobal />
            <SupportEngine />

        </>
    );
}
export default PreventionScreen;
