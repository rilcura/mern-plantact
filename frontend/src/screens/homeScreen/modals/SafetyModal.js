import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import security from '../images/security.png'
console.log(security)

function SafetyModal() {
    const [lgShow, setLgShow] = useState(false);

    return (
        <>
            <Button variant='none' onClick={() => setLgShow(true)}>
                <img
                    className=""
                    src={security}
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

                <Modal.Body>
                    <h2 className='my-3 text-center pb-3 text-decoration-underline'>TIPS TO A SECURED AND SAFE ENVIRONMENT</h2>
                    <ol>
                        <li>
                            <h4>CAUTIOUS OF YOUR SURROUNDING</h4>
                            Do not stand by and do nothing if you observe someone trash, whether it be a friend or a member of your family. Inform them that leaving trash behind is unethical.
                            Pick up any litter you notice on the ground, whether it be plastic, cans, or paper, and put it in the appropriate recycling container.
                            Attempt to remove an animal from an environment where it may become ill if it is seen consuming unclean trash.
                        </li>
                        <br />
                        <li>
                            <h4>REPORT THE SITUATION</h4>
                            Report any nearby neighborhood fires to the fire department, and advise your other neighbors to keep 100 feet away.
                            Inform the barangay authorities or contact the police if you see someone cutting trees in your neighborhood without a permit.
                            Report any local dam failures that result in significant waterfalls in the region.
                        </li>
                        <br />
                        <li>
                            <h4>SHARE WHAT YOU KNOW</h4>
                            If someone is unaware, let them know the most recent information on what's going on in the region.
                            Tell others about the hotlines for people who need assistance with cleaning their canals or removing a buildup of undesired debris.
                        </li>
                    </ol>

                </Modal.Body>

            </Modal>
        </>
    );
}

export default SafetyModal;