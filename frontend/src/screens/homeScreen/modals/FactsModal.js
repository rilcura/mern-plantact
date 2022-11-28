import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import light from '../images/light.png'
console.log(light)

function FactsModal() {
    const [lgShow, setLgShow] = useState(false);

    return (
        <>
            <Button variant='none' onClick={() => setLgShow(true)}>
                <img
                    className=""
                    src={light}
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

                <Modal.Body className='p-4'>
                    <div>
                        <h2 className='my-3 text-center pb-3 text-decoration-underline'>MANDATE (E.O. 192, s. 1987)</h2>
                        The Department is the primary agency responsible for the conservation, management, development, and proper use of the country’s environment and natural resources, specifically forest and grazing lands, mineral resources, including those in reservation and watershed areas, and lands of the public domain, as well as the licensing and regulation of all natural resources as may be provided for by law in order to ensure equitable sharing of the benefits derived therefrom for the welfare of the present and future generations of Filipinos.
                        <br /><br />
                        <span className='fw-bold'>To accomplish this mandate, the Department shall be guided by the following objectives:</span>
                        <br /><br />
                        <ol>
                            <li>Assure the availability and sustainability of the country's natural resources through judicious use and systematic restoration or replacement, whenever possible;</li>
                            <li>Increase the productivity of natural resources in order to meet the demands for forest, mineral, and land resources if a growing population;</li>
                            <li>Enhance the contribution of natural resources for achieving national economic and social development;</li>
                            <li>Promote equitable access to natural resources by the different sectors of the population; and</li>
                            <li>Conserve specific terrestrial and marine areas representative of the Philippine natural and cultural heritage for present and future generations.</li>
                        </ol>

                        <h2 className='mb-2 mt-4 text-decoration-underline'>VISION</h2>
                        A nation enjoying and sustaining its natural resources and a clean and healthy environment.
                        <h2 className='mb-2 mt-4 text-decoration-underline'>MISSION</h2>
                        To mobilize our citizenry in protecting, conserving, and managing the environment and natural resources for the present and future generations.
                        <h2 className='mb-2 mt-4 text-decoration-underline'>DEVELOPMENT GOAL</h2>
                        Human well-being, and environmental quality and sustainability ensured.

                        <h2 className='mb-2 mt-4 text-decoration-underline'>ORGANIZATIONAL OUTCOMES</h2>
                        <ul>
                            <li>Promote human well-being and ensure environmental quality</li>
                            <li> Sustainably-managed environment and natural resources</li>
                            <li>Adaptive capacities of human communities and natural systems ensured</li>
                        </ul>

                        <h2 className='mb-2 mt-4 text-decoration-underline'>END DEVELOPMENT PRINCIPLE</h2>
                        <ul>
                            <li>Good Governance
                                <ul>
                                    <li>Accountability, transparency, integrity, participatory and predictability</li>
                                    <li>Ease of doing business</li>
                                </ul>
                            </li>
                            <li>Social justice
                                <ul>
                                    <li>Equity and gross national happiness</li>
                                </ul>
                            </li>
                            <li>Social Entrepreneurship</li>
                            <li>Partnership with Civil Society</li>
                            <li>Ecosystem integrity</li>
                            <li>Sustainable consumption and production</li>
                            <li>Polluters pay
                                <ul>
                                    <li>Payment for ecosystem services</li>
                                </ul>
                            </li>
                            <li>Rule of law</li>
                            <li>Honoring global commitments</li>
                        </ul>

                        <h2 className='mb-2 mt-4 text-decoration-underline'>KEY STRATEGIES</h2>
                        <ol>
                            <li>Adoption of the watershed/river basin framework in planning</li>
                            <ul>
                                <li>Prioritizing areas within the watershed</li>
                                <li>Forest Land Use Planning</li>
                                <li>Adopting soil and water conservation measures</li>
                                <li>Agroforestry systems</li>
                            </ul>
                            <li>Closing open access areas of forestlands by granting appropriate tenure/ management arrangement</li>
                            <li>Convergence approach among NGAs, LGUs and CSOs</li>
                            <li>Area management approach - an integrated area development where all basic societal and economic services are delivered in an area for more impact</li>
                            <li>Capacity building of DENR frontliners, LGus, CSO partners, POs and docial entrepreneurs</li>
                            <li>IEC, advocacy and social mobilization</li>
                            <li>Certification Systems</li>
                        </ol>
                    </div>


                </Modal.Body>

            </Modal>
        </>
    );
}

export default FactsModal;