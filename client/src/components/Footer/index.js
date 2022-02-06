import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

import 'bootstrap/dist/css/bootstrap.css';

import './index.css';

const FooterStrap = () => {
    return (
        <MDBFooter className="font-small pt-4 mt-4">
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: Thai Hoang Pham
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default FooterStrap;

