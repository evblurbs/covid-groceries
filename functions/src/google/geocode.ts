import * as functions from "firebase-functions";
import axios from "axios";

const GEOCODE_URL = "https://maps.googleapis.com/maps/api/geocode/json";

const geocodeAddress = (address: string): Promise<any> =>
  axios
    .get(GEOCODE_URL, {
      params: {
        address,
        key: functions.config().google.api,
      },
    })
    .then(({ data }): any => {
      if (!data.results || !data.results[0]) return false;
      const result = data.results[0];
      if (
        result.types.includes("street_address") ||
        result.types.includes("premise") ||
        result.types.includes("subpremise")
      ) {
        return normalizeResult(result);
      } else {
        return false;
      }
    })
    .catch((err) => console.log("err", err));

const normalizeResult = ({
  formatted_address,
  geometry: {
    location: { lat, lng },
  },
}: any) => ({
  formattedAddress: formatted_address,
  lat,
  lng,
});

export default geocodeAddress;
