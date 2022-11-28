import { Helmet } from 'react-helmet-async';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import services1 from '../serviceScreen/images/services1.png'
import services2 from '../serviceScreen/images/services2.png'
import services3 from '../serviceScreen/images/services3.png'
import services4 from '../serviceScreen/images/services4.jpg'
import services5 from '../serviceScreen/images/services5.png'
import FooterGlobal from '../../components/footer/footer';
import ScrollButton from '../../components/ScrollButton';
import SupportEngine from '../../components/SupportChat/SupportEngine';
import React from 'react';
import OrganizationContacts from '../../components/OrganizationContacts';


console.log(services1)
console.log(services2)
console.log(services3)
console.log(services4)
console.log(services5)

function ServiceScreen() {

    return (
        <>
            <Helmet>
                <title>Services</title>
            </Helmet>
            {/* Featured Services */}
            <Container className='mt-4'>
                <h1>Featured Services</h1>
                <Row className="mt-3 gx-5">
                    <Col lg={6} xs={12}>
                        <a href='https://www.facebook.com/DENR3Official/videos/6114570725291107' target="_blank" rel="noreferrer" className="text-dark text-decoration-none">
                            <img
                                className='w-100'
                                src={services2}
                                alt="Say No to lead poisoning"
                                style={{ height: '352px' }}
                            />
                        </a>
                        <h4 className="mt-3 fw-bold">
                            EARTH TALK CENTRAL LUZON 🌎
                        </h4>
                        <p>
                            Join us for another informative episode of Earth Talk Central Luzon, the 27th KBP Golden Dove Awards Best Provincial Public Affairs Program, with Don Marco and Team RSCIG of the Department of Environment and Natural Resources Region III.
                        </p>
                        <p>
                            In today's episode, we talk about the implementation of the Manila Bay cleanup and rehabilitation program in Bulacan with CENRO Rolly Mulato. 💚
                        </p>
                        <p className="fw-bold">
                            #TayoAngKalikasan
                            #EarthTalkCentralLuzon
                        </p>
                    </Col>
                    <Col lg={6} xs={12}>
                        <a href='https://www.facebook.com/photo?fbid=486906723479533&set=a.226261916210683' target="_blank" rel="noreferrer" className="text-dark text-decoration-none">
                            <img
                                className='w-100 border'
                                src={services1}
                                alt="Earth talk"
                                style={{ height: '352px' }}
                            />
                        </a>
                        <h5 className='mt-3 fw-bold'>
                            The Department of Environment and Natural Resources joins the observance of the International Lead Poisoning Prevention Week 2022 with the theme, "SAY NO TO LEAD POISONING". This campaign takes place from October 23-29, 2022.
                        </h5>
                        <p>
                            The focus of this year’s week “Say no to lead poisoning” recognizes the additional urgency of action needed to eliminate all sources of lead exposure.
                        </p>
                        <p>
                            2022 will mark 10 years of action to eliminate lead paint, for a healthier world free of lead, resulting in 88 countries (45%) having established legally binding controls on the production, import, sale, and use of lead paints.
                        </p>
                        <p className='fw-bold'>
                            #BanLeadPaint
                        </p>
                    </Col>
                </Row>
            </Container>
            {/* What we do */}
            <Container className='text-center mt-5'>
                <h1>WHAT WE DO</h1><br />
                <h3 className='text-decoration-underline'>Priority Thrusts and Direction of the Secretary</h3>
                <Container className='pt-4'>
                    <Row>
                        <Col lg={3}></Col>
                        <Col lg={6}>
                            <p className='py-2'>
                                Adopt climate risk lens in national planning and policies.  The Department shall establish a Natural Resource National Geospatial Database, a platform for planning and informed policy and decision making.
                            </p>
                            <p className='py-2'>
                                Increase forest cover.  The reforestation program ENGP shall be continued to reforest the remaining open/degraded forestlands, as well as protected areas in the country.  Protection and enforcement shall also be strengthened by increasing manpower and with the use of modern technology.
                            </p>
                            <p className='py-2'>
                                Conserve protected areas and biodiversity.  Protected areas, inland wetlands, Ramsar sites, classified caves, marine protected areas, and wildlife resources shall be protected and ENR law enforcement shall be strengthened.
                            </p>
                            <p className='py-2'>
                                Improve air and water quality, and waste management.  Ensure that ambient air quality and water quality are within the standards and solid wastes are properly managed from the source to disposal facilities.

                            </p>
                        </Col>
                        <Col lg={3}></Col>
                    </Row>

                </Container>
            </Container>
            {/* Volunteer opportunities/organizations */}
            <Row>
                <Col lg={8}>
                    <Container className='mt-5 bg-light p-3 pt-4'>
                        <h1>VOLUNTEER OPPORTUNITIES / ORGANIZATIONS</h1>
                        <Container className='px-4 pt-3'>

                            <Row className='d-flex align-items-center justify-content-center g-4'>
                                <Col lg={4}>
                                    <a href='https://www.facebook.com/DENR3Official/posts/pfbid02zrXv9LJagFoTHpnotxWMrwoWUxdvscK7PZBrecSVCjstaGgbDfQatpqcDEUo5pFol' target="_blank" rel="noreferrer" className="text-dark text-decoration-none">
                                        <img
                                            className='w-100'
                                            src={services3}
                                            alt="Say No to lead poisoning"
                                        />
                                    </a>
                                </Col>
                                <Col lg={8}>
                                    <h2 className='fw-bold'>
                                        Heads up, Central Luzon youth organizations! 📣📣📣
                                    </h2>

                                    <p className='pt-3'>
                                        The Department of Environment and Natural Resources (DENR) Region 3, in partnership with the Environmental Management Bureau Region 3, will hold <span className='fw-bold'>the Hirayang Kabataan Kontra Basura: The 2022 Search for the Central Luzon's Best Youth Eco-Organization.</span>
                                    </p>
                                    <p>
                                        If you are part of a youth organization with a track record initiating environmental advocacies, particularly on ecological solid waste management, you might just be what we are looking for!
                                        Check the details below and send your entry to denr3vidclip@gmail.com on or before November 11, 2022, 5:00p.m.
                                        Sama-sama, tulong-tulong sa pangangalaga ng kapaligiran, dahil Ikaw, Ako, <span className='fw-bold'>#TayoAngKalikasan!</span> 💚
                                    </p>
                                </Col>
                            </Row>
                            <Row className='d-flex align-items-center justify-content-center g-4 pt-4'>
                                <Col lg={4}>
                                    <a href='https://www.facebook.com/DENR3Official/posts/pfbid02PsdNxwCTayaqezyRsDJoFatCNTCoYBRLafnStxQS6Nqy57sxas27frbcnuaeqJqsl' target="_blank" rel="noreferrer" className="text-dark text-decoration-none">
                                        <img
                                            className='w-100'
                                            src={services4}
                                            alt="WILD AND ALIVE WEDNESDAYS"
                                        />
                                    </a>
                                </Col>
                                <Col lg={8}>
                                    <h2 className='fw-bold'>
                                        WILD AND ALIVE WEDNESDAYS
                                    </h2>

                                    <p className='pt-3'>
                                        The Noni or Apatot, scientific Morinda citrifolia L., may surprise some Filipinos by the fact that it is actually indigenous to the Philippines. Its juice and extract, after all, has been marketed as a supplement coming from Hawaii some years ago. This tree, found along sandy coasts in the Philippines and Central Luzon, is easily noticeable, once you recognize its lumpy, greenish-yellow fruit.
                                    </p>
                                    <p>
                                        If you are part of a youth organization with a track record initiating environmental advocacies, particularly on ecological solid waste management, you might just be what we are looking for!
                                        Check the details below and send your entry to denr3vidclip@gmail.com on or before November 11, 2022, 5:00p.m.
                                        Sama-sama, tulong-tulong sa pangangalaga ng kapaligiran, dahil Ikaw, Ako,
                                    </p>
                                    <p>
                                        Help us save and plant these native trees to keep them #wildandalive. Contact your nearest DENR Office to report any illegal forest activities and to know more information on how you can help in our country’s reforestation programs.
                                    </p>
                                    <p>
                                        Pinagkukunan ng pakinabang, ating pangalagaan! Dahil Ikaw, Ako, <span className='fw-bold'>#TayoAngKalikasan! </span>💚
                                    </p>
                                </Col>
                            </Row>
                            <Row className='d-flex align-items-center justify-content-center g-4 pt-4'>
                                <Col lg={4}>
                                    <a href='https://r3.denr.gov.ph/index.php/news-events/press-releases/1409-denr-s-greening-program-vital-to-climate-change-mitigation?highlight=WyJncmVlbmluZyIsInByb2dyYW0iLCJwcm9ncmFtJ3MiLCJ2aXRhbCIsInRvIiwiY2xpbWF0ZSIsImNoYW5nZSIsIm1pdGlnYXRpb24iLCJncmVlbmluZyBwcm9ncmFtIiwiZ3JlZW5pbmcgcHJvZ3JhbSB2aXRhbCIsInByb2dyYW0gdml0YWwiLCJwcm9ncmFtIHZpdGFsIHRvIiwidml0YWwgdG8iLCJ2aXRhbCB0byBjbGltYXRlIiwidG8gY2xpbWF0ZSIsInRvIGNsaW1hdGUgY2hhbmdlIiwiY2xpbWF0ZSBjaGFuZ2UiLCJjbGltYXRlIGNoYW5nZSBtaXRpZ2F0aW9uIiwiY2hhbmdlIG1pdGlnYXRpb24iXQ==' target="_blank" rel="noreferrer" className="text-dark text-decoration-none">
                                        <img
                                            className='w-100'
                                            src={services5}
                                            alt="DENR's greening program vital to climate change mitigation"
                                        />
                                    </a>
                                </Col>
                                <Col lg={8}>
                                    <h2 className='fw-bold'>
                                        DENR's greening program vital to climate change mitigation
                                    </h2>

                                    <p className='pt-3'>
                                        The Department of Environment and Natural Resources (DENR) here has strengthened its Enhanced National Greening Program (E-NGP) to mitigate potential impacts of climate change by continuously rehabilitating denuded forestlands and preserving the region’s forest cover.
                                    </p>
                                    <p>
                                        Paquito Moreno, Jr., executive director of the DENR in Region 3, reported that the government's flagship reforestation program has restored over 129,000 hectares of denuded forestlands and watersheds in Central Luzon since its implementation in 2011.
                                    </p>

                                    <p>

                                        “Preserving our forest cover and making more of our forest landscapes intact is an important component of the government’s climate change mitigation program,” he said, adding that these efforts could reduce communities’ vulnerability to climate shock, as forests could sequester greenhouse gases like carbon dioxide from the atmosphere.
                                    </p>


                                    <p>
                                        Further, since bamboo is found to have been an effective instrument to curb greenhouse emission gases, Moreno reported that the DENR has established more than 3,200 hectares of bamboo plantation in 2021, which is in addition to the more than 14,000-hectare established bamboo plantations under NGP.
                                    </p>
                                    <p>
                                        He said partnership and collaboration with private firms were also strengthened to sustain these plantations, where more than 5,800 hectares of unfunded NGP areas have already been adopted by different organizations.

                                    </p>
                                    <p>
                                        The DENR has likewise partnered with families in upland areas, Peoples’ Organizations, Philippine National Police, Bureau of Fire Protection, and Philippine Army in the region to monitor the development of plantations and facilitate quick response against forest fires and reported illegal forest activities in NGP areas.
                                    </p>

                                    <p>
                                        Apart from its ecological value, the NGP, since its implementation in 2011, has generated 154,055 jobs in the region from its plantation maintenance and protection activities.
                                    </p>

                                    <p>
                                        NGP aims to reforest 1.5 million hectares of denuded forestlands and watersheds in the country. It was expanded until 2028 under Executive Order No. 193 to reforest and develop the remaining degraded forest areas in the country.
                                    </p>


                                </Col>
                            </Row>
                        </Container>
                    </Container>
                </Col>
                {/* Organization Contacts */}
                <Col lg={4}>
                    <OrganizationContacts />
                </Col>
            </Row>
            {/* Divider */}
            <Container className='text-white py-1'>Divider</Container>
            {/* Divider end */}
            <ScrollButton />
            <FooterGlobal />
            <SupportEngine />
        </>
    );
}
export default ServiceScreen;
