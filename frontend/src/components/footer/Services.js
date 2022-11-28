import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ServicesModal() {
    const [lgShow, setLgShow] = useState(false);

    return (
        <>
            <Button variant='none' onClick={() => setLgShow(true)} className='text-white'>Services</Button>
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
                    <h1 className='my-3 text-center pb-3'>SERVICES</h1>
                    <p className='mx-5 lh-lg fs-5'>
                        <h4 className='fw-bold'>What we do of DENR</h4>
                        <p>
                            Priority Thrusts and Direction of the Secretary:
                        </p><p>
                            Adopt climate risk lens in national planning and policies.  The Department shall establish a Natural Resource National Geospatial Database, a platform for planning and informed policy and decision making.
                        </p><p>
                            Increase forest cover.  The reforestation program ENGP shall be continued to reforest the remaining open/degraded forestlands, as well as protected areas in the country.  Protection and enforcement shall also be strengthened by increasing manpower and with the use of modern technology.
                        </p><p>
                            Conserve protected areas and biodiversity.  Protected areas, inland wetlands, Ramsar sites, classified caves, marine protected areas, and wildlife resources shall be protected and ENR law enforcement shall be strengthened.
                        </p><p>
                            Improve air and water quality, and waste management.  Ensure that ambient air quality and water quality are within the standards and solid wastes are properly managed from the source to disposal facilities.
                        </p><p>
                            Ensure water security and resilience in high-water stressed areas.  Ensure that water supply is sustained by regulating the use (demand) and managing the source.
                        </p><p>
                            Sustainably and responsibly manage mineral resources. Mining sector must be effectively regulated based on applied ENR laws and be a catalyst for economic recovery.
                        </p><p>
                            Promote effective land management and governance.  To issue title for remaining untitled A and D public lands.
                        </p>
                    </p>
                    <p className='mx-5 lh-lg fs-5'>
                        <h4 className='fw-bold'>DENR Major Programs</h4>
                        <p>
                            Clean Air.  Pursuant to RA 8749, priority activities include monitoring of compliance of firms/industries; operationalization of airshed governing boards; and calibration and maintenance of air quality monitoring stations.
                        </p><p>
                            Clean Water.  Pursuant to RA 9275, priority activities include monitoring of compliance for firms/industries; conduct of classification of waterbodies; and  designation of Water Quality Management Areas.
                        </p><p>
                            Solid Waste Management.  Pursuant to RA 9003, priority activities include closure of dumpsites; and establishment of material recovery facilities (MRFs).
                        </p><p>
                            Expanded (Enhanced) National Greening Program.  Pursuant to Executive Order No. 193 signed on 12 November 2015, the Expanded NGP intends to rehabilitate all remaining unproductive, denuded and degraded forestlands estimated at 7.1 million hectares from 2016 to 2028.
                        </p><p>
                            Intensified Forest Protection and Anti-Illegal Logging.  Pursuant to Executive Order No. 23 dated 1 February 2011 “Declaring a Moratorium on the cutting and harvesting of timber in the natural and residual forests and creating the Anti-Illegal Logging Task Force”.
                        </p><p>
                            Geo-hazard, Groundwater Assessment and Responsible Mining. Pursuant to RA 7942 and Executive Order No. 79, priority activities include rehabilitation of abandoned mines; Assessment of coastal geo-hazards and ground water resources.
                        </p><p>
                            Enhanced Biodiversity Conservation.  In line with the implementation Philippine Biodiversity Strategy and Action Plan 2015-2028, priority activities include establishment of eco-tourism areas;  establishment of critical habitats; establishment and disestablishment of protected areas; and strengthen implementation on wildlife conservation.
                        </p><p>
                            Scaling Up of Management of Coastal and Marine Ecosystem Program.  In line with the implementation of Coastal and Marine Ecosystems Management Program, priority activities include development of biodiversity friendly enterprises; maintenance and protection of coastal and marine ecosystems; coral reef and sea grass assessment and  establishment of Marine Protected Areas Network.
                        </p><p>
                            Land Administration and Management – Pursuant to Commonwealth Act 141 and RA 10023, priority activity is issuance of Free Patent to Agricultural and Residential lots.
                        </p><p>
                            Manila Bay Rehabilitation.  Pursuant to Supreme Court Mandamus on Manila Bay directing 13 government agencies to clean-up, rehabilitate, and preserve Manila Bay, and restore and maintain its waters to SB level to make it fit for swimming, skin-diving, and other forms of contact recreation.
                        </p>
                    </p>
                    <p className='pt-3 text-center'>
                        @ <span className='fw-bold'>2023</span>
                    </p>
                </Modal.Body>

            </Modal>
        </>
    );
}

export default ServicesModal;