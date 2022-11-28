import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Modal from 'react-bootstrap/Modal';
import { BsFillPersonFill } from 'react-icons/bs'

function ContactUsModal() {
    const [lgShow, setLgShow] = useState(false);

    return (
        <>
            <Button variant='none' onClick={() => setLgShow(true)} className='text-white'>Contact Us</Button>
            <Modal
                size="xl"
                show={lgShow}
                dialogClassName="modal-90w"
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton className='bg-success text-white'>
                    <Modal.Title id="example-modal-sizes-title-lg" >
                        PlantAct
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body className='text-center'>
                    <h1 className='my-3'>CONTACT US</h1>
                    <Container>
                        <Row className='pt-3'>
                            <Col lg={3}>
                                <h1>
                                    <BsFillPersonFill />
                                </h1>
                                <p>
                                    Engr. Paquito T. Moreno,
                                    <br />Jr. CESO III
                                    <br />Regional Executive Director
                                    <br />Email: r3@denr.gov.ph
                                    <br />Contact No.: (045) 455-3648
                                </p>
                            </Col>
                            <Col lg={3}>
                                <h1>
                                    <BsFillPersonFill />
                                </h1>
                                <p>
                                    Rhema Meryll S. Sunga
                                    <br /> Researchers Email:
                                    <br /> rmssunga.student@ua.edu.ph
                                    <br /> Contact No.: 09331639704
                                </p>
                            </Col>
                            <Col lg={3}>
                                <h1>
                                    <BsFillPersonFill />
                                </h1>
                                <p>
                                    Lyanne Marie T.David
                                    <br /> Researchers Email:
                                    <br /> lmtdavid.student@ua.edu.ph
                                    <br />Contact No.: 09368822807
                                </p>
                            </Col>
                            <Col lg={3}>
                                <h1>
                                    <BsFillPersonFill />
                                </h1>
                                <p>
                                    Mark Genesis H. Serrano
                                    <br />Researchers Email:
                                    <br />mghserrano.student@ua.edu.ph
                                    <br />Contact Number: 09265024093
                                </p>
                            </Col>

                        </Row>
                    </Container>
                    <p className='pt-3'>
                        @ <span className='fw-bold'>2023</span>
                    </p>
                </Modal.Body>

            </Modal>
        </>
    );
}

export default ContactUsModal;