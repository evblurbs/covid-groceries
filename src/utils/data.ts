// import { screenIds } from "../routes/Recipient";
import { formatPhone } from "./strings";

// const { ADDRESS, DELIVERY, BUNDLES, PHONE } = screenIds;

const defaultRecipientState = {
  geoCoded: false,
  textConfirmed: false,
  shopperConfirmed: false,
  fulfilled: false,
};

interface RecipientState {
  ADDRESS: any;
  DELIVERY: any;
  BUNDLES: any;
  PHONE: any;
}

export const normalizeRecipientState = ({
  ADDRESS: {
    location: { lat, lng },
    formatted_address,
  },
  DELIVERY: { deliveryNote },
  BUNDLES: { bundle },
  PHONE: { phone },
}: RecipientState) => ({
  lat,
  lng,
  formattedAddress: formatted_address,
  deliveryNote,
  bundles: [bundle],
  phone: formatPhone(phone),
  ...defaultRecipientState,
});

interface ShopperState {
  RESULTS: any;
  PHONE: any;
}

export const normalizeShopperState = ({
  RESULTS: { result },
  PHONE: { phone },
}: ShopperState) => ({
  orderId: result,
  phone: formatPhone(phone),
  textConfirmed: false,
});

export const getPhone = ({ PHONE: { phone = "" } = {} }: any): string => phone;

export const getLocation = ({
  ADDRESS: {
    location: { lat, lng },
  },
}) => [lat, lng];

export const getZipLocation = ({
  SEARCH: { location: { lat = 0, lng = 0 } = {} } = {},
}: any) => [lat, lng];
