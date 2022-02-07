import React from 'react';
import { ADD_TO_CART } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { useStoreContext } from "../../utils/GlobalState.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {
    Button, Form, FormGroup,
    Label, Input, Collapse,
    Card, CardTitle, CardText,
    CardBody, CardImg,
    UncontrolledPopover, PopoverHeader
}
    from 'reactstrap';

