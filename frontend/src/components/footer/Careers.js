import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import { AiOutlineSend } from 'react-icons/ai'

function CareersModal() {
    const [lgShow, setLgShow] = useState(false);

    return (
        <>
            <Button variant='none' onClick={() => setLgShow(true)} className='text-white'>Careers</Button>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton className='bg-success text-white'>
                    <Modal.Title id="example-modal-sizes-title-lg" >
                        PlantAct
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body className='text-center'>
                    <h1 className='my-3'>CAREERS</h1>
                    <p className='mx-5 lh-lg fs-5'>
                        <h5 className='my-4'>A LOT OF OPPORTUNITIES AWAIT YOU!!!</h5>
                        <p>WANT TO JOIN US?</p>
                    </p>
                    <p className='text-start mx-5'>SEND US YOUR EMAIL</p>
                    <Container className='d-block align-items-center justify-content-center px-5 pb-3'>
                        <Row className='g-1'>
                            <Col lg={10}>
                                <Form className='text-start'>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control type="email" />
                                    </Form.Group>
                                </Form>
                            </Col>
                            <Col lg={2} className='d-grid'>
                                <Button variant="light" type="submit" >
                                    < AiOutlineSend />
                                </Button>
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

export default CareersModal;