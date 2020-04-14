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
import { createNewRequest } from "../utils/firestore";
import { confirmOrderReq } from "../utils/functions";
import { getPhone } from "../utils/data";
import { saveOrderLocation } from "../utils/database";

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
  [screenIds.DELIVERY]: PATH_PHONE,
  [screenIds.BUNDLES]: PATH_ADDRESS,
  [screenIds.PHONE]: PATH_CONFIRM,
};

const STEPS = [
  PATH_BUNDLES,
  PATH_ADDRESS,
  PATH_DELIVERY,
  PATH_PHONE,
  PATH_CONFIRM,
];

const calculateStep = (
  pathname,
  { BUNDLES, ADDRESS, DELIVERY, PHONE }: any
) => {
  let step = 0;
  if (BUNDLES) step = 1;
  if (ADDRESS) step = 2;
  if (DELIVERY) step = 3;
  if (PHONE) step = 4;
  return step;
};

const Recipient = ({ history }: RouteComponentProps) => {
  const [recipientState, setRecipientState] = useState({});
  const [firstLoad, setFirstLoad] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const [isCreated, setIsCreated] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [orderId, setOrderId] = useState("");

  /*
   * A function to update the state for the recipient
   * flow. In an attempt to avoid Redux or anything else
   * more complex, we made our routes a little bloated.
   */
  const updateState = ({ screenId, inputs }: any) => {
    setRecipientState({
      ...recipientState,
      [screenId]: inputs,
    });
    history.push(nextPathMap[screenId]);
    if (screenId === screenIds.PHONE) setIsComplete(true);
  };

  /*
   * We force the user to the next step based on the data.
   * For example, if a user tries to access the phone screen,
   * but we have no data, then we push them to the first step
   * or the address screen.
   */
  const { pathname } = useLocation();

  if (firstLoad) {
    setFirstLoad(false);
    const step = calculateStep(pathname, recipientState);
    if (STEPS.includes(pathname) && STEPS[step] !== pathname) {
      history.replace(STEPS[step]);
    }
  }

  /*
   * Callback to set the order is confirmed after the
   * Firestore listener fires back indicating the user
   * responded to the text message they received.
   */
  const confirmOrder = (confirmed: boolean) => {
    if (!confirmed) return;
    setIsConfirmed(confirmed);
    saveOrderLocation(orderId, recipientState);
    setRecipientState({
      ...recipientState,
      isConfirmed: confirmed,
    });
  };

  /*
   * Upon submitting a phone number, we update
   * Firestore with the data and send an SMS to confirm.
   * We need to set a flag (isCreated) to indicate we don't
   * hit a loop here if the users hits back.
   */
  if (isComplete && !isCreated) {
    // optimistic assumption here
    createNewRequest(recipientState).then((id) => setOrderId(id));
    confirmOrderReq(recipientState);
    setIsCreated(true);
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
      <Route
        path={PATH_CONFIRM}
        exact
        component={(props) =>
          orderId ? (
            <Confirm
              orderId={orderId}
              phone={getPhone(recipientState)}
              confirmOrder={confirmOrder}
              isConfirmed={isConfirmed}
              {...props}
            />
          ) : null
        }
      />
    </React.Fragment>
  );
};

export default withRouter(Recipient);
