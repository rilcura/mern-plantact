import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function TnCsModal() {
    const [lgShow, setLgShow] = useState(false);

    return (
        <>
            <Button variant='none' onClick={() => setLgShow(true)} className='text-white'>Terms & Condition</Button>
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

                <Modal.Body>
                    <h1 className='my-3 text-center'>Terms and Condition</h1>
                    <p className='mx-5 lh-lg fs-5'>
                        The terms and conditions govern the use of PlantAct. The website is owned and operated by the
                        researchers of PlantAct and Department of Environment and Natural Resources Region III.
                        <br />By using PlantAct, you indicate that you have read and understand these Terms and Conditions and
                        agree to abide by them at all times.
                        <br /><span className='text-muted fst-italic'>Intellectual Property</span>
                        <br />All content published and made available in our website is the property of PlantAct, Researchers,
                        and the DENR. This includes, but is not limited to images, texts, logos, and anything that contributes
                        to the composition of PlantAct.
                        <br /><span className='text-muted fst-italic'>Age Restrictions</span>
                        <br />The minimum age of users for our website is 18 years old. By using PlantAct, the user agree that
                        they are over 18 years old. The researchers do not assume any legal responsibility for false
                        statement about the age.
                        <br /><span className='text-muted fst-italic'>User Contributions</span>
                        <br />Users may post the following information in our website:
                        <ul>
                            <li>Photos; and</li>
                            <li>Videos.</li>
                        </ul>
                        By posting anonymously in PlantAct, you agree not to act illegally or violate these Terms and
                        Conditions.
                        <br /><span className='text-muted fst-italic'>Accounts</span>
                        <br />When you create an account on our website, you agree to the following:
                        <br />1. You are solely responsible for your account and the security and privacy of your account,
                        including passwords or sensitive information attached; and
                        2. All personal information you provide to us through your account is up to date, accurate, and
                        truthful.
                        <br />We reserve the rights to terminate your account if you are using PlantAct illegally or if you violate
                        these Terms and Conditions.
                        <br /><span className='text-muted fst-italic'>Goods and Services</span>
                        <br />Our website does not sell goods or services. If we are made aware that a user is violating these
                        Terms and Conditions, we reserve the right to suspend the user from selling goods and services on
                        our website.
                        Changes
                        These Terms and Conditions may be amended from time to time. We will post a notice regarding
                        the changes on our website.
                        <br /><span className='text-muted fst-italic'>Contact Details</span>
                        <br />Please contact us if you have any questions or concerns.
                        <br />Our contact details are as follows:

                        <br />Rhema Meryll Sunga
                        rmssunga.student@ua.edu.ph
                        <br />Lyanne Marie David
                        lmtdavid.student@ua.edu.ph
                        <br />Mark Genesis Serrano
                        mghserrano.student@ua.edu.ph
                        <br />You can also contact us through private messages available on our website.

                        Effective Date: 24<sup>th</sup> day of November 2022</p>
                    <p className='pt-3 text-center'>
                        @ <span className='fw-bold'>2023</span>
                    </p>
                </Modal.Body>

            </Modal>
        </>
    );
}

export default TnCsModal;