import React, { useState } from "react";
import {
  Route,
  withRouter,
  RouteComponentProps,
  useLocation,
} from "react-router-dom";
import AddressForm from "../recipient/AddressForm";
import DeliveryNote from "../recipient/DeliveryNote";
import Bundles from "../recipient/Bundles";
import Phone from "../recipient/Phone";
import Confirm from "../recipient/Confirm";

export const screenIds = {
  ADDRESS: "ADDRESS",
  DELIVERY: "DELIVERY",
  BUNDLES: "BUNDLES",
  PHONE: "PHONE",
};

export const PATH_ADDRESS = "/address";
export const PATH_DELIVERY = "/delivery";
export const PATH_BUNDLES = "/bundles";
export const PATH_PHONE = "/phone";
const PATH_CONFIRM = "/confirm";

const nextPathMap = {
  [screenIds.ADDRESS]: PATH_DELIVERY,
  [screenIds.DELIVERY]: PATH_BUNDLES,
  [screenIds.BUNDLES]: PATH_PHONE,
  [screenIds.PHONE]: PATH_CONFIRM,
};

const STEPS = [
  PATH_ADDRESS,
  PATH_DELIVERY,
  PATH_BUNDLES,
  PATH_PHONE,
  PATH_CONFIRM,
];

const calculateStep = (
  pathname,
  { ADDRESS, DELIVERY, BUNDLES, PHONE }: any
) => {
  let step = 0;
  if (ADDRESS) step = 1;
  if (DELIVERY) step = 2;
  if (BUNDLES) step = 3;
  if (PHONE) step = 4;
  return step;
};

const Recipient = ({ history }: RouteComponentProps) => {
  const [recipientState, setRecipientState] = useState({});
  const [firstLoad, setFirstLoad] = useState(true);

  const updateState = ({ screenId, inputs }: any) => {
    setRecipientState({
      ...recipientState,
      [screenId]: inputs,
    });
    history.push(nextPathMap[screenId]);
  };

  const { pathname } = useLocation();

  if (firstLoad) {
    setFirstLoad(false);
    const step = calculateStep(pathname, recipientState);
    if (STEPS.includes(pathname) && STEPS[step] !== pathname) {
      history.replace(STEPS[step]);
    }
  }

  return (
    <React.Fragment>
      <Route
        path={PATH_ADDRESS}
        exact
        component={() => <AddressForm next={updateState} />}
      />
      <Route
        path={PATH_DELIVERY}
        exact
        component={() => <DeliveryNote next={updateState} />}
      />
      <Route
        path={PATH_BUNDLES}
        exact
        component={() => <Bundles next={updateState} />}
      />
      <Route
        path={PATH_PHONE}
        exact
        component={() => <Phone next={updateState} />}
      />
      <Route path={PATH_CONFIRM} exact component={() => <Confirm />} />
    </React.Fragment>
  );
};

export default withRouter(Recipient);
