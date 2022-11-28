import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import AboutUsModal from './AboutUs';
import ServicesModal from './Services';
import CareersModal from './Careers';
import ContactUsModal from './Contact';
import TnCsModal from './TnCsModal';
import PrivacyPolicyModal from './PrivacyPolicy';
import './footer.css';
import Facebook from './images/facebook.png'
import Twitter from './images/twitter.png'
import Youtube from './images/youtube.png'
import { LinkContainer } from 'react-router-bootstrap';

console.log(Facebook)
console.log(Twitter)
console.log(Youtube)

function FooterGlobal() {
    return (
        <>
            <Container fluid className='position-relative text-center bg-success text-lg-start text-white mt-5 pt-2'>
                {/* Pre-footer */}
                <Container id='pre-footer' className='position-absolute top-0 start-50 translate-middle shadow-lg p-3 mb-5 rounded '>
                    <Row>
                        <Col lg={10} className='text-white'>
                            <h2>Ready to make a change?</h2>
                            <p>Let's get started!</p>
                        </Col>
                        <Col lg={2}>
                            <h6>test</h6>
                            <LinkContainer activeClassName="activeNav" to="/reports">
                                <Button variant='success px-4 py-2'>Report to us!</Button>
                            </LinkContainer>
                        </Col>
                    </Row>

                </Container>

                {/* Divider */}
                <Container className='mt-5 text-success'>hello</Container>
                {/* Footer */}
                <Container>

                    <Container className='text-center text-md-start mt-5'>
                        <Row className='mt-3 text-center'>
                            <Col md="3" lg="4" xl="3" className='mx-auto mb-4 d-flex align-items-center justify-content-center'>
                                <h2 className='fw-bold font-logo'>

                                    PlantAct <span className='roboto-p'><br />© 2023</span>
                                </h2>
                            </Col>

                            <Col md="2" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='fw-bold mb-4'>About</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        <AboutUsModal />
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        <CareersModal />
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        <ServicesModal />
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        <ContactUsModal />
                                    </a>
                                </p>
                            </Col>

                            <Col md="3" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='fw-bold mb-4'>Legal</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        <TnCsModal />
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        <PrivacyPolicyModal />
                                    </a>
                                </p>

                            </Col>

                            <Col md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                <h6 className='fw-bold mb-4'>Follow us</h6>
                                <a href='https://www.facebook.com/DENREMBR3' className='text-primary' target="_blank" rel="noreferrer">
                                    <img
                                        className=""
                                        src={Facebook}
                                        alt="Facebook Logo"
                                    />
                                </a>

                                <a href='https://twitter.com/denrcluzon?s=21&t=xxc1L0P2yo91pYRSSvOefA&fbclid=IwAR1VvA199-qgNdeWYrWcAKzunPazekVFGwuo1iZXeFa6SX1jjg-K7zdkRq4https://twitter.com/denrcluzon?s=21&t=xxc1L0P2yo91pYRSSvOefA&fbclid=IwAR1VvA199-qgNdeWYrWcAKzunPazekVFGwuo1iZXeFa6SX1jjg-K7zdkRq4' className='text-primary ps-3 pe-3' target="_blank" rel="noreferrer">
                                    <img
                                        className=""
                                        src={Twitter}
                                        alt="Twitter Logo"
                                    />
                                </a>

                                <a href='https://www.youtube.com/channel/UClEdMkTnpbKA4aHqepPlj1Q' className='text-danger' target="_blank" rel="noreferrer">
                                    <img
                                        className=""
                                        src={Youtube}
                                        alt="Youtube Logo"
                                    />
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Container>
        </>
    );
}

export default FooterGlobal;