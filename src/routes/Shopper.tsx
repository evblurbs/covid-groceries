import React, { useState } from "react";
import {
  Route,
  withRouter,
  RouteComponentProps,
  useLocation,
} from "react-router-dom";
import ZipForm from "../shopper/ZipForm";
import Results from "../shopper/Results";
import { getZipLocation } from "../utils/data";

export const screenIds = {
  SEARCH: "SEARCH",
  RESULTS: "RESULTS",
};

export const PATH_SEARCH = "/search";
export const PATH_RESULTS = "/results";

const nextPathMap = {
  [screenIds.SEARCH]: PATH_RESULTS,
};

const STEPS = [PATH_SEARCH, PATH_RESULTS];

const calculateStep = (pathname, { SEARCH }: any) => {
  let step = 0;
  if (SEARCH) step = 1;
  return step;
};

const Shopper = ({ history }: RouteComponentProps) => {
  const [shopperState, setShopperState] = useState({});
  const [firstLoad, setFirstLoad] = useState(true);

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
    </React.Fragment>
  );
};

export default withRouter(Shopper);
