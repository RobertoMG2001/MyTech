import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EmailIcon from '@material-ui/icons/Email';
import "./Footer.css";

export default function Footer(){
    return(
        <div className="main-footer text-center">
            <Container>
                <Row>
                    {/* Column1 */}
                    <Col>
                        <h4> Contact</h4>
                        <ui className="list-unstyled">
                            <li>477-123-4567</li>
                            <li>León, Guanajuato, México</li>
                            <li>Universidad de la Salle Bajío</li>
                            <li><EmailIcon /> contact@mytech.com</li>
                        </ui>
                    </Col>
                    {/* Column2 */}
                    <Col>
                        <h4>About us</h4>
                        <ui className="list-unstyled">
                            <li>Who are we?</li>
                            <li>Relationship with investors</li>
                            <li>Job applications</li>
                        </ui>
                    </Col>
                    {/* Column3 */}
                    <Col>
                        <h4>Visit our social media</h4>
                        <ui className="list-unstyled">
                            <li><FacebookIcon /> MyTech</li>
                            <li><InstagramIcon /> @mytech</li>
                            <li><YouTubeIcon /> MyTech</li>
                            <li><TwitterIcon /> @mytech</li>
                        </ui>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} MyTech | All rights reserved |
                        Terms Of Service | Privacy
                    </p>
                </Row>
            </Container>
        </div>
    )
}