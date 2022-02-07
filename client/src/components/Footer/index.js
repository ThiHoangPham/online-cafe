import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

import 'bootstrap/dist/css/bootstrap.css';

import './index.css';

const FooterStrap = () => {
    return (
        <MDBFooter className="fixed-bottom">   
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} All Rights Reserved. Thai Hoang Pham
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default FooterStrap;