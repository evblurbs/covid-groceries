import React, { useState } from "react";
import {
  Route,
  withRouter,
  RouteComponentProps,
  useLocation,
} from "react-router-dom";
import { getZipLocation, getOrderId, getPhone } from "../utils/data";
import { createNewShopper } from "../utils/firestore";
import { confirmShopperReq } from "../utils/functions";
import ZipForm from "../shopper/ZipForm";
import Results from "../shopper/Results";
import Phone from "../shopper/Phone";
import Confirm from "../shopper/Confirm";

export const screenIds = {
  SEARCH: "SEARCH",
  RESULTS: "RESULTS",
  PHONE: "PHONE",
};

export const PATH_SEARCH = "/search";
export const PATH_RESULTS = "/results";
export const PATH_PHONE = "/digits";
export const PATH_CONFIRM = "/thankyou";

const nextPathMap = {
  [screenIds.SEARCH]: PATH_RESULTS,
  [screenIds.RESULTS]: PATH_PHONE,
  [screenIds.PHONE]: PATH_CONFIRM,
};

const STEPS = [PATH_SEARCH, PATH_RESULTS, PATH_PHONE, PATH_CONFIRM];

const calculateStep = (pathname, { SEARCH, RESULTS, PHONE }: any) => {
  let step = 0;
  if (SEARCH) step = 1;
  if (RESULTS) step = 2;
  if (PHONE) step = 3;
  return step;
};

const Shopper = ({ history }: RouteComponentProps) => {
  const [shopperState, setShopperState] = useState({});
  const [isComplete, setIsComplete] = useState(false);
  const [isCreated, setIsCreated] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);
  const [isConfirmed, setIsConfirmed] = useState(false);

  /*
   * A function to update the state for the recipient
   * flow. In an attempt to avoid Redux or anything else
   * more complex, we made our routes a little bloated.
   */
  const updateState = ({ screenId, inputs }: any) => {
    setShopperState({
      ...shopperState,
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
    const step = calculateStep(pathname, shopperState);
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
    setShopperState({
      ...shopperState,
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
    createNewShopper(shopperState);
    confirmShopperReq(shopperState);
    setIsCreated(true);
  }

  console.log("shopper state", shopperState);

  return (
    <React.Fragment>
      <Route
        path={PATH_SEARCH}
        exact
        component={() => <ZipForm next={updateState} />}
      />
      <Route
        path={PATH_RESULTS}
        exact
        component={() => (
          <Results location={getZipLocation(shopperState)} next={updateState} />
        )}
      />
      <Route
        path={PATH_PHONE}
        exact
        component={() => <Phone next={updateState} />}
      />
      <Route
        path={PATH_CONFIRM}
        exact
        component={() => (
          <Confirm
            orderId={getOrderId(shopperState)}
            confirmOrder={confirmOrder}
            isConfirmed={isConfirmed}
            phone={getPhone(shopperState)}
          />
        )}
      />
    </React.Fragment>
  );
};

export default withRouter(Shopper);
