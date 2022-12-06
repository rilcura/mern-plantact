import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/esm/Card';
import { Helmet } from 'react-helmet-async';
import DarkVariantExample from '../../components/carousel/Carousel.js';
import FooterGlobal from '../../components/footer/footer.js';
import LatestNews from '../../components/latestNews/latestNews.js';
import home1 from './images/home1.png'
import home2 from './images/home2.jpg'
import denrLogo from './images/denrLogo.png'
import denrsocmeds from './images/denrsocmeds.png'
import ScrollButton from '../../components/ScrollButton.js';
import SupportEngine from '../../components/SupportChat/SupportEngine/index.js';
import SafetyModal from './modals/SafetyModal.js';
import FactsModal from './modals/FactsModal.js';
import PatrolModal from './modals/PatrolModal.js';

console.log(home1)
console.log(home2)
console.log(denrLogo)
console.log(denrsocmeds)

function HomeScreen() {

  return (
    <>
      <Helmet>
        <title>PlantAct</title>
      </Helmet>
      <DarkVariantExample />

      <div className='text-center py-2'>
        <iframe width="1120" height="480" src="https://www.youtube.com/embed/hZwj5CGDQOo" title="Kung Walang Aksaya, Masaya!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

      <Container>
        <h3 className='pt-3 border-bottom'>Home</h3>
      </Container>
      <Container className="pt-4">
        <Row>
          <Col lg={8}>
            <h5 className='secular-heading'>DENR, JICA OPEN ACCESS ROAD TO LOCAL ECONOMY, AGROFORESTRY IN NUEVA ECIJA</h5>
            <p>The Department of Environment and Natural Resources (DENR) here and the Japan International Cooperation Agency (JICA) recently opened the 3.2-kilometer concreted Calaocan access road in Barangay Burgos, Carranglan, Nueva Ecija to increase local economic productivity and ease the transportation of products from upland agroforestry farms.   DENR Regional Executive Director Paquito Moreno, Jr. said this P26-million worth access road was funded by JICA, the twelfth completed agroforestry support...</p>
            <p>Published: 28 September 2022</p>
            <a href='https://r3.denr.gov.ph/index.php/news-events/press-releases/1431-denr-jica-open-access-road-to-lcoal-economy-agroforestry-in-nueva-ecija' target="_blank" rel="noreferrer" className='text-primary'>
              <Button variant="success">LEARN MORE</Button></a>
          </Col>
          <Col>
            <img
              className="d-md-block"
              src={home1}
              alt="Some Road?"
            />
          </Col>
        </Row>
      </Container>
      <Container className="pt-4">
        <Row className='gy-3'>
          <Col>
            <Card className="p-4 bg-dark text-white" style={{ height: '257px' }}>
              <Card.Title as="h3" className='secular-heading'>PARTNERSHIP FORGED TOWARDS PROTECTION, REFORESTATION OF MOUNT ARAYAT</Card.Title>
              <Card.Subtitle className='text-muted pt-2 roboto-p'>
                Published: 29 September 2022
              </Card.Subtitle>
              <Card.Body className='d-flex align-items-end justify-content-end'>
                <a href='https://r3.denr.gov.ph/index.php/news-events/photo-releases/1432-partnership-forged-towards-protection-reforestation-of-mount-arayat' target="_blank" rel="noreferrer" className='text-primary'>
                  <Button variant="success" >LEARN MORE</Button></a>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6}>
            <Card className="p-4 bg-light" style={{ height: '257px' }}>
              <Card.Title as="h3" className='secular-heading'>DENR, PARTNERS HOLD MASSIVE COASTAL CLEANUP DRIVE
              </Card.Title>
              <Card.Subtitle className='text-muted pt-2 roboto-p'>
                Published: 20 September 2022
              </Card.Subtitle>
              <Card.Body className='d-flex align-items-end justify-content-end'>
                <a href="https://r3.denr.gov.ph/index.php/news-events/press-releases/1430-denr-partners-hold-massive-coastal-cleanup-drive#:~:text=The%20Department%20of%20Environment%20and,the%20region's%20waterways%20and%20coastlines." target="_blank" rel="noreferrer" className='text-primary'>
                  <Button variant="success">LEARN MORE</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className='pt-4'>
        <a href='https://www.facebook.com/DENR3Official' target="_blank" rel="noreferrer" className='text-primary'>
          <img
            className='w-100'
            src={home2}
            alt="DENR Flag"
          />
        </a>
      </Container>
      <Container className='border-bottom border-3 mt-4' />
      <Container className='justify-content-evenly text-center pt-4'>
        <Row className='d-flex align-items-center justify-content-center'>
          <Col>
            <SafetyModal />


            <h2 className='fw-bold pt-2'>SAFETY & SECURITY</h2>
          </Col>
          <Col>
            <FactsModal />
            <h2 className='fw-bold pt-2'>FACTS</h2>
          </Col>
          <Col>
            <PatrolModal />
            <h2 className='fw-bold pt-2'>PATROL</h2>
          </Col>
        </Row>
      </Container>
      <Container className='border-bottom border-3 mt-4' />
      <Container>
        <LatestNews />
        <a href='https://www.facebook.com/DENR3Official' target="_blank" rel="noreferrer" className='text-primary'>
          <img
            className='w-100'
            src={denrsocmeds}
            alt="DENR Flag"
          />
        </a>


      </Container>
      <Container className='py-5 text-center'>
        <h2
          className='pb-4'
          style={{
            lineHeight: '33px',
            fontSize: '28px',
            fontWeight: '300',
            letterSpacing: '0.2rem'
          }}>
          A MESSAGE FROM THE <span className='fw-bold '>ENGINEER PAQUITO TUMAPANG MORENO, JR.</span><br />
          <span style={{
            fontSize: '19px',
            lineHeight: '22px ',
          }}>Executive Director of the Department of Environment and Natural Resources (DENR) in Central Luzon</span>
        </h2>
        <Row>
          <Col lg={4} className="d-flex align-items-center justify-content-center">
            <img
              className="ps-3"
              src={denrLogo}
              alt="logo3"
            />
          </Col>
          <Col
            className='d-flex align-items-center justify-content-center'
            style={{
              textAlign: 'center',
              fontSize: '22px',
              lineHeight: '26px',
              letterSpacing: '0.2em',
              paddingBottom: '1.5rem',
              paddingTop: '1.5rem',
            }}>
            MAY WE ALL REMEMBER THAT WE ARE NOT JUST CUSTODIANS OR GUARDIANS OF NATURE, BUT WE ARE PART OF IT.<br /><br /> HOW WE WORK TOGETHER DETERMINES MUCH OF HOW WE FACE THE FUTURE AS A SPECIES.<br /><br /> KAYA SAMA-SAMA, TULONG-TULONG SA PANGANGALAGA NG KAPALIGIRAN DAHIL IKAW, AKO, TAYO ANG KALIKASAN!

          </Col>
        </Row>
      </Container>
      <ScrollButton />
      <FooterGlobal />
      <SupportEngine />
    </>
  );
}
export default HomeScreen;
