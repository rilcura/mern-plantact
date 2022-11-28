import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AboutUsModal() {
    const [lgShow, setLgShow] = useState(false);

    return (
        <>
            <Button variant='none' onClick={() => setLgShow(true)} className='text-white'>About Us</Button>
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
                    <h1 className='my-3'>ABOUT US</h1>
                    <p className='mx-5 lh-lg fs-5'>People can improve the planet
                        by utilizing PlantAct in
                        positive ways. It could act as both
                        a bullhorn for environmental concerns and the crucial
                        counting mechanism
                        needed to show that a sizable number
                        of people are demanding change.
                        Since sustainability has a significant influence
                        on younger audiences
                        PlantAct, individuals can become mindful of how mistreated
                        Mother Earth has been.</p>
                    <p className='pt-3'>
                        @ <span className='fw-bold'>2023</span>
                    </p>
                </Modal.Body>

            </Modal>
        </>
    );
}

export default AboutUsModal;