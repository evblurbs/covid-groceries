// import { screenIds } from "../routes/Recipient";
import { formatPhone } from "./strings";

// const { ADDRESS, DELIVERY, BUNDLES, PHONE } = screenIds;

const defaultRecipientState = {
  geoCoded: false,
  textConfirmed: false,
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

export const getPhone = ({ PHONE: { phone = "" } = {} }: any): string => phone;

export const getLocation = ({
  ADDRESS: {
    location: { lat, lng },
  },
}) => [lat, lng];
