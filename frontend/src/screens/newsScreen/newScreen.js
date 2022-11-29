import Col from 'react-bootstrap/esm/Col.js';
import Container from 'react-bootstrap/esm/Container.js';
import Row from 'react-bootstrap/esm/Row.js';
import Card from 'react-bootstrap/Card'
import { Helmet } from 'react-helmet-async';
import Carousel3 from '../../components/carousel3/Carousel3.js';
import news1 from './images/news1.jpg'
import news2 from './images/news2.jpg'
import news3 from './images/news3.jpg'
import news4 from './images/news4.png'
import FooterGlobal from '../../components/footer/footer.js';
import ScrollButton from '../../components/ScrollButton.js';
import SupportEngine from '../../components/SupportChat/SupportEngine/index.js';

console.log(news1)
console.log(news2)
console.log(news3)
console.log(news4)

function NewScreen() {


    return (
        <>
            <Helmet>
                <title>News</title>
            </Helmet>
            <Carousel3 />
            <Container fluid className="border-bottom border-top mt-4 border-2">
                <div className='text-center my-5 mx-5'><h3>
                    Keep up-to-date with what’s happening to our planet with the latest
                    environmental news and issues.</h3></div>
            </Container>
            {/* Items */}
            <Container fluid className='pt-4 px-5'>
                <Row>
                    <Col lg={9}>
                        <Row className='g-5 pe-4'>
                            <Col lg={6}>
                                <a href="https://r3.denr.gov.ph/index.php/news-events/photo-releases/1414-denr-rescues-brahminy-kite?highlight=WyJkZW5yIiwiZGVucidzIiwicmVzY3VlcyIsImJyYWhtaW55Iiwia2l0ZSIsImRlbnIgcmVzY3VlcyIsImRlbnIgcmVzY3VlcyBicmFobWlueSIsInJlc2N1ZXMgYnJhaG1pbnkiLCJyZXNjdWVzIGJyYWhtaW55IGtpdGUiLCJicmFobWlueSBraXRlIl0=" target="_blank" rel="noreferrer" className="text-dark text-decoration-none">
                                    <Card className="text-center border-light">
                                        <div>
                                            <img
                                                className='w-100'
                                                src={news1}
                                                alt="News 1"
                                                style={{ height: '449px' }}
                                            />
                                        </div>
                                        <Card.Title as="p" className="p-3"><h5 className='fw-bold'>DENR RESCUES BRAHMINY KITE</h5>

                                            A Brahminy kite or red-backed sea eagle, scientific Haliastur indus, was rescued by the wildlife team of the Department of Environment and Natural Resources (DENR) provincial office in Zambales.
                                            <br />
                                            <br /><span className='fw-bold'> 22 MAY 2022</span>
                                        </Card.Title>
                                    </Card>
                                </a>
                            </Col>
                            <Col lg={6}>
                                <a href="https://r3.denr.gov.ph/index.php/news-events/photo-releases/1406-river-cleanup-initiative-cuts-waste-from-polluting-calumpit-waterways?highlight=WyJyaXZlciIsInJpdmVyJ3MiLCJjbGVhbnVwIiwicml2ZXIgY2xlYW51cCJd" target="_blank" rel="noreferrer" className="text-dark text-decoration-none">
                                    <Card className="text-center border-light">
                                        <div>
                                            <img
                                                className='w-100'
                                                src={news4}
                                                alt="News 3"
                                                style={{ height: '449px' }}
                                            />
                                        </div>
                                        <Card.Title as="p" className="p-3"><h5 className='fw-bold'>RIVER CLEANUP INITIATIVE CUTS WASTE FROM POLLUTING CALUMPIT WATERWAYS</h5>

                                            Massive cleanup efforts of the Department of Environment and Natural Resources (DENR) and the provincial government of Bulacan resulted in the removal of accumulated solid waste and water hyacinths that pollute Calumpit River in Bulacan.
                                            <br />
                                            <br /><span className='fw-bold'>16 MARCH 2022</span>
                                        </Card.Title>
                                    </Card>
                                </a>
                            </Col>
                        </Row>
                        <Row className='g-5 pe-4 pt-4'>
                            <Col lg={6}>
                                <a href="https://r3.denr.gov.ph/index.php/news-events/photo-releases/1373-new-irrigation-system-to-ensure-survival-of-forest-plantations-in-nueva-ecija?highlight=WyJuZXciLCInbmV3JyIsImlycmlnYXRpb24iLCJuZXcgaXJyaWdhdGlvbiJd" target="_blank" rel="noreferrer" className="text-dark text-decoration-none">
                                    <Card className="text-center border-light">
                                        <div>
                                            <img
                                                className='w-100'
                                                src={news2}
                                                alt="News 3"
                                            />
                                        </div>
                                        <Card.Title as="p" className="p-3"><h5 className='fw-bold'>NEW IRRIGATION SYSTEM TO ENSURE SURVIVAL OF FOREST PLANTATIONS IN NUEVA ECIJA
                                        </h5>
                                            The eight-kilometer long Calaocan Irrigation Pipeline System in Barangay Burgos, Carranglan, Nueva Ecija is now operational, after it was inaugurated on Thursday by the Department of Environment and Natural Resources (DENR) in Central Luzon and the Japan International Cooperation Agency (JICA) under the Forestland Management Program (FMP).
                                            <br />
                                            <br /><span className='fw-bold'>10 JULY 2021</span>
                                        </Card.Title>

                                    </Card>
                                </a>
                            </Col>
                            <Col lg={6}>
                                <a href="https://r3.denr.gov.ph/index.php/news-events/photo-releases/1400-act-for-wetlands?highlight=WyJhY3QiLCJmb3IiLCInZm9yIiwid2V0bGFuZHMiLCJhY3QgZm9yIiwiYWN0IGZvciB3ZXRsYW5kcyIsImZvciB3ZXRsYW5kcyJd" target="_blank" rel="noreferrer" className="text-dark text-decoration-none">
                                    <Card className="text-center border-light">
                                        <div>
                                            <img
                                                className='w-100'
                                                src={news3}
                                                alt="News 3"
                                            />
                                        </div>

                                        <Card.Title as="p" className="p-3"><h5 className='fw-bold'>ACT FOR WETLANDS
                                        </h5>
                                            Hundreds of volunteers and personnel from partner government agencies joined the Department of Environment and Natural Resources (DENR) here in massive mangrove growing activities in an effort to uphold sustainability and conservation of wetland areas in Central Luzon.
                                            <br />
                                            <br /><span className='fw-bold'>21 FEB 2022</span>
                                        </Card.Title>
                                    </Card>
                                </a>
                            </Col>
                        </Row>
                    </Col>
                    {/* Current Topics */}
                    <Col className='gy-4 pb-4'>
                        <h1 className='text-center border-bottom mb-3 pb-2'>Current Topics</h1>

                        {/* Current topics 1 */}
                        <a href='https://r3.denr.gov.ph/index.php/news-events/press-releases/1426-denr-partners-score-13-000-board-feet-of-illegal-logs-in-nueva-ecija?highlight=WyJwYXJ0bmVycyIsInBhcnRuZXJzJyIsInNjb3JlIiwiMTMsMDAwIiwicGFydG5lcnMgc2NvcmUiLCJwYXJ0bmVycyBzY29yZSAxMywwMDAiLCJzY29yZSAxMywwMDAiXQ==' target="_blank" rel="noreferrer" className="text-dark text-decoration-none">
                            <h5 className='fw-bold'>DENR, partners score 13,000 board feet of illegal logs in Nueva Ecija
                            </h5>
                            <p>
                                This came after a composite team from the DENR, Nueva Ecija Police Provincial Office (NEPPO), local police station of General Tinio, and 84th Infantry Battalion of the Philippine Army held an ...
                            </p>
                        </a>

                        {/* Current topics 2 */}
                        <a href='https://r3.denr.gov.ph/index.php/news-events/press-releases/1412-over-19k-poll-ads-removed-from-denr-s-oplan-baklas?highlight=WyJvdmVyIiwiMTlrIiwicG9sbCIsIm92ZXIgMTlrIiwib3ZlciAxOWsgcG9sbCIsIjE5ayBwb2xsIl0=' target="_blank" rel="noreferrer" className="text-dark text-decoration-none">
                            <h5 className='fw-bold'>Over 19K poll ads removed from DENR's Oplan Baklas</h5>
                            <p>
                                The series of operations came through following the recent directive of DENR Secretary Jim Sampulna to its field offices to carry out "Operation Baklas" that aimed to promote an environmentally conscious elections by urging political parties ...
                            </p>
                        </a>

                        {/* Current topics 3 */}
                        <a href='https://r3.denr.gov.ph/index.php/news-events/press-releases/1409-denr-s-greening-program-vital-to-climate-change-mitigation?highlight=WyJncmVlbmluZyIsInByb2dyYW0iLCJwcm9ncmFtJ3MiLCJncmVlbmluZyBwcm9ncmFtIl0=' target="_blank" rel="noreferrer" className="text-dark text-decoration-none">
                            <h5 className='fw-bold'>DENR's greening program vital to climate change mitigation</h5>
                            <p>
                                The Department of Environment and Natural Resources (DENR) here has strengthened its Enhanced National Greening Program (E-NGP) to mitigate potential impacts of climate change by continuously rehabilitating denuded ...
                            </p>
                        </a>
                        {/* Current topics 4 */}

                        <a href='https://r3.denr.gov.ph/index.php/news-events/press-releases/1399-rescued-serpent-eagle-released-in-aurora-forests?highlight=WyJyZXNjdWVkIiwiJ3Jlc2N1ZWQnIiwic2VycGVudCIsImVhZ2xlIiwicmVzY3VlZCBzZXJwZW50IiwicmVzY3VlZCBzZXJwZW50IGVhZ2xlIiwic2VycGVudCBlYWdsZSJd' target="_blank" rel="noreferrer" className="text-dark text-decoration-none">
                            <h5 className='fw-bold'> Rescued serpent eagle released in Aurora forestsn</h5>
                            <p>
                                A concerned citizen from Aurora province recently turned over to the Department of Environment and Natural Resources (DENR) here an endemic Philippine serpent eagle scientific Spilornis holospilus...
                            </p>
                        </a>

                        {/* Current topics 5 */}

                        <a href='https://r3.denr.gov.ph/index.php/news-events/press-releases/1396-denr-renews-call-to-protect-sierra-madre-to-fight-climate-change?highlight=WyJyZW5ld3MiLCJjYWxsIiwicmVuZXdzIGNhbGwiXQ==' target="_blank" rel="noreferrer" className="text-dark text-decoration-none">
                            <h5 className='fw-bold'>DENR renews call to protect Sierra Madre to fight climate change</h5>
                            <p>
                                The Department of Environment and Natural Resources (DENR) has renewed its call to protect the more than 500-kilometer Sierra Madre Mountain Range (SMMR) to avert the impact of the world’s rising temperature and fight climate change...
                            </p>
                        </a>
                    </Col>
                </Row>
            </Container >

            {/* Divider */}
            <Container className='text-white py-2'>Divider</Container>
            {/* Divider end */}
            <ScrollButton />
            <FooterGlobal />
            <SupportEngine />
        </>
    );
}
export default NewScreen;
