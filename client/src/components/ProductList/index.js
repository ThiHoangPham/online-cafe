import React from 'react';
import { REMOVE_FROM_CART } from '../../utils/actions';
import { useStoreContext } from '../../utils/GlobalState';
import { idbPromise } from "../../utils/helpers";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, CardTitle, CardText, CardBody, CardImg } from 'reactstrap';

