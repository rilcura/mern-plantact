import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function PrivacyPolicyModal() {
    const [lgShow, setLgShow] = useState(false);

    return (
        <>
            <Button variant='none' onClick={() => setLgShow(true)} className='text-white'>Privacy Policy</Button>
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
                    <h1 className='my-3'>Privacy Policy</h1>
                    <p className='mx-5 lh-md fs-5'>
                        THIS AGREEMENT dated September 19, 2022, by and between the researchers of College of
                        Information Technology, Computing and Library Science of University of the Assumption
                        (CITCLS), the PATRON,
                        <br />and;
                        <br />Department of Environment and Natural Resources (DENR), a Government Agency, the
                        RECIPIENT.
                        <br />for;
                        <br />PlantAct: A web application that allows anyone to upload photos and videos of non-eco-
                        friendly environmental remediation in their town.
                        <br />
                        <br /> WHEREAS, PATRON and RECIPIENT, for their mutual benefit and pursuant to a working
                        relationship which has been or may be established, anticipate that PATRON may disclose or deliver
                        to a working relationship which has been or may be established, anticipate that PATRON may
                        disclose or deliver to RECIPIENT documents, components, parts, information, drawings, data,
                        sketches, plans programs, specifications, techniques, processes, software, inventions and other
                        materials, both written and oral, of a secret, confidential or proprietary nature, including without
                        limitation any and all information relating to marketing, finance, forecasts, invention, research,
                        design or development of information system and any supportive or incidental subsystems, and any
                        and all subject matter claimed in or disclosed by any patent application prepared or filed by or
                        behalf of by PATRON, in any jurisdiction, and any amendments or supplements thereto (collectively,
                        “Proprietary Information”); and WHEREAS, PATRON desires to assure that the confidentiality of any
                        Proprietary Information is maintained; NOW, THEREFORE, in consideration of the foregoing
                        premises, and the mutual covenants contained herein, PATRON and RECIPIENT hereby agree as
                        follows:
                        <br />1. For a period of four (4) months from the date hereof, RECIPIENT shall hold in trust and
                        confidence, and not disclose to others or use for its own benefit or for the benefit of another, any
                        Proprietary Information which is disclosed to RECIPIENT by PATRON at any time between the
                        date hereof and twelve (12) months thereafter. RECIPIENT shall disclose Proprietary Information
                        received under this Agreement to person within its organization only if such persons:
                        (i) have a need to know
                        and;
                        (ii) are bound in writing to protect the confidentiality of such Proprietary Information. This
                        paragraph shall survive and continue after any expiration or termination of this Agreement
                        and shall bind RECIPIENT, its employees, agents, representatives, successors, heirs, and
                        assigns.

                        <br />2. The undertakings and obligations of RECIPIENT under this Agreement shall not apply to any
                        Proprietary Information which:
                        (a) is described in an issued patent anywhere in the world, is disclosed in a printed
                        publication available to the public or is otherwise in the public domain through no action or
                        fault of RECIPIENT;
                        (b) is generally disclosed to third parties by PATRON without restriction on such third parties
                        or is approved for release by written authorization of PATRON;
                        (c) if not designated “confidential” at the time of first disclosure hereunder, or is not later
                        designated in writing by PATRON within thirty (30) days from disclosure to RECIPIENT to be
                        of a secret, confidential or proprietary nature; or
                        (d) is shown to PATRON by RECIPIENT, within ten (10) days from disclosure, by underlying
                        documentation to have been known by RECIPIENT before receipt from v and/or to have
                        been developed by Re RECIPIENT completely independent of any disclosure by PATRON.
                        <br />3. Title to all property received by RECIPIENT from PATRON, including all Proprietary Information,
                        shall always remain the sole property of PATRON, and this Agreement shall not be construed to
                        grant to RECIPIENT any patents, licenses or similar rights to such property and Proprietary
                        Information disclosed to RECIPIENT hereunder.
                        <br />4. RECIPIENT shall, upon request of PATRON, return to PATRON all documents, drawings, and
                        other tangible materials, including all Proprietary Information and all manifestation thereof,
                        delivered to Rec RECIPIENT, and all copies and reproductions thereof.
                        <br />5. The parties further agree to the following terms and conditions:
                        <br />i. Any breach by RECIPIENT of any of RECIPIENT&#39;s obligations under this Agreement will
                        result in an irreparable inquiry to PATRON for which damages and other legal remedies will
                        be inadequate. In seeking enforcement of any of these obligations, PATRON will be entitled
                        (in addition to other remedies) to preliminary and permanent injunctive and other equitable
                        relief to prevent, discontinue and/or restrain the breach of this Agreement;
                        <br />ii. If any provision of this Agreement is invalid or unenforceable, then such provision shall be
                        construed and limited to the extent necessary, or severed, if necessary, to eliminate such
                        invalidity or unenforceability, and the other provisions of this Agreement shall not be affected
                        thereby;
                        <br />iii. In any dispute over whether information or matter is Proprietary Information hereunder, it
                        shall be the burden of RECIPIENT to show both that such contested information or matter is
                        not Proprietary Information within the meaning of this Agreement, and that it does not
                        constitute a trade secret under the Uniform Trade Secrets Act or successor or a similar law
                        in effect in the State of Pampanga;
                        iv. No delay or omission by either party in exercising any rights under this Agreement will
                        operate as a waiver of that or any other right. A waiver or consent given by either party on

                        any one occasion is effective only in that instance and will not be construed as a bar to or
                        waiver of any right on any other occasion;
                        <br />v. This Agreement shall be binding upon and will inure to the benefit of the parties hereto
                        and their respective successors and assigns;
                        <br />vi. This Agreement is governed by and will be construed in accordance with the laws of the
                        State of (your state), and the courts of (your state) shall be the exclusive forum;
                        <br />vii. This Agreement is in addition to any prior written agreement between PATRON and
                        RECIPIENT relating to the subject matter of this agreement; in the event of any disparity or
                        conflict between the provision of such agreements, the provision which is more protective of
                        Proprietary Information shall control. This Agreement may not be modified, in whole or in
                        part, except by an agreement in writing signed by PATRON and RECIPIENT.
                        IN WITNESS WHEREOF, the parties have executed this Agreement as of the date first above
                        written, the PATRON.
                        <br />The Researchers of College of Information Technology, Computing and Library Science
                        (CITCLS)
                        (PATRON)
                        <br />
                        <br /> Name: Rhema Meryll Sunga
                        <br />Title: Researcher of PlantAct
                        <br />Name: Lyanne Marie David
                        <br />Title: Researcher of PlantAct
                        <br />Name: Mark Genesis Serrano
                        <br />Title: Researcher of PlantAct
                        <br />Department of Environment and Natural Resources (DENR)
                        <br />(RECIPIENT)
                        <br />Name: Karl Kevin Tallorin
                        <br />Title: Chief, Regional ICT Unit
                        <br />Name: Lorie Gene C. Gaba
                        <br />Title: DIC Chief, Regional Strategic Communications &amp; Initiatives Group
                    </p>
                    <p className='pt-3'>
                        @ <span className='fw-bold'>2023</span>
                    </p>
                </Modal.Body>

            </Modal>
        </>
    );
}

export default PrivacyPolicyModal;