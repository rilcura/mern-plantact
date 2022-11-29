import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./latestNews.css"
import news1 from './images/news1.png'
import news2 from './images/news2.png'
import news3 from './images/news3.png'

console.log(news1)
console.log(news2)
console.log(news3)

function LatestNews() {
    return (
        <>
            <div className="bg-light mt-4 rounded-bottom">
                <div className="green-nav rounded-top"></div>
                <Container className="p-4">
                    <h1 className="roboto-condensed-b">LATEST NEWS</h1>
                    <Row className="g-4">
                        <Col lg={4}>
                            <Card className="bg-light text-center h-100">
                                <a href="https://r3.denr.gov.ph/index.php/news-events/regional-releases/1109-denr-approves-forest-land-use-plans-of-4-lgus-in-region-6" target="_blank" rel="noreferrer" className="text-dark">
                                    <div>

                                        <img
                                            className='w-100'
                                            src={'https://r3.denr.gov.ph/images/Press_Releases/Provincial_News/2019/Ocean_Conservation.jpg'}
                                            alt="DENR news 1"
                                        />

                                        <Card.ImgOverlay>
                                            <p className="date">JUNE 21</p>
                                        </Card.ImgOverlay>
                                    </div>
                                </a>
                                <Card.Title as="p" className="p-3 fw-bold">DENR UNDERSCORES THE ROLE OF CHILDREN IN PROTECTING THE OCEAN
                                </Card.Title>
                            </Card>
                        </Col>
                        <Col lg={4}>
                            <Card className="bg-light text-center h-100">
                                <a href="https://r3.denr.gov.ph/index.php/news-events/regional-releases/1228-denr-seizes-illegally-cut-lumber-in-n-ecija" target="_blank" rel="noreferrer" className="text-dark">
                                    <div className="">
                                        <img
                                            className='w-100'
                                            src={news2}
                                            alt="DENR Flag"
                                        />
                                        <Card.ImgOverlay>
                                            <p className="date">JULY 7</p>
                                        </Card.ImgOverlay>
                                    </div>
                                </a>
                                <Card.Title as="p" className="p-3 fw-bold">DENR SEIZES ILLEGALLY CUT LUMBER IN N. ECIJA
                                </Card.Title>
                            </Card>
                        </Col>
                        <Col lg={4}>
                            <Card className="bg-light text-center h-100">
                                <a href="https://r3.denr.gov.ph/index.php/news-events/regional-releases/1210-bamboo-can-help-increase-ph-s-forest-cover" target="_blank" rel="noreferrer" className="text-dark">
                                    <div className="">
                                        <img
                                            className='w-100'
                                            src={news3}
                                            alt="DENR Flag"
                                        />
                                        <Card.ImgOverlay>
                                            <p className="date">DEC 22</p>
                                        </Card.ImgOverlay>
                                    </div>
                                </a>
                                <Card.Title as="p" className="p-3 fw-bold">"SCUBASUREROS" SCOUR ZAMBALES' SHORE AND SEA FOR LITTER

                                </Card.Title>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default LatestNews;