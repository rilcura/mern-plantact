import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import police from '../images/police.png'
import patrol1 from '../images/patrol1.png'
import patrol2 from '../images/patrol2.png'
console.log(police)
console.log(patrol1)
console.log(patrol2)

function PatrolModal() {
    const [lgShow, setLgShow] = useState(false);

    return (
        <>
            <Button variant='none' onClick={() => setLgShow(true)}>
                <img
                    className=""
                    src={police}
                    alt="logo1"
                />
            </Button>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton className='bg-success text-white'>
                    <Modal.Title id="example-modal-sizes-title-lg" >

                    </Modal.Title>
                </Modal.Header>

                <Modal.Body className='text-center'>
                    <img
                        className=""
                        src={patrol1}
                        alt="logo1"
                    />
                    <img
                        className=""
                        src={patrol2}
                        alt="logo1"
                    />

                </Modal.Body>

            </Modal>
        </>
    );
}

export default PatrolModal;